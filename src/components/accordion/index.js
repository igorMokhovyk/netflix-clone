import React, {useState, useContext, createContext} from "react";
import {Container,  Title, Item, Inner, Header, Body} from './styles/accordion';
import PropTypes from 'prop-types';



const ToggleContext = createContext()

export default function Accordion({children, ...resProps}) {


  Accordion.propTypes = {
    children: PropTypes.node.isRequired,
  };


  return (
    <Container {...resProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccourdionTitle({children, ...restProps}) {


  Accordion.Title.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <Title {...restProps}>{children}</Title>
};



Accordion.Item = function AccordionItem({children, ...restProps}) {

  Accordion.Item.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccourdionHeader({children, ...restProps}) {


  Accordion.Header.propTypes = {
    children: PropTypes.node.isRequired,
  };


  const {toggleShow, setToggleShow} = useContext(ToggleContext)
//better use  - setToggleShow((toggleShow) => !toggleShow) - instead - setToggleShow(!toggleShow)
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}{...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({children, ...restProps}) {

  Accordion.Body.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const {toggleShow} = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}
