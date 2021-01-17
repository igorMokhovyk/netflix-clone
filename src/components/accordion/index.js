import React, {useState, useContext, createContext} from "react";
import {Container, Frame, Title, Item, Inner, Header, Body} from './styles/accordion';
// import PropTypes from 'prop-types';

// Accordion.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const ToggleContext = createContext()

export default function Accordion({children, ...resProps}) {

  return (
    <Container {...resProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccourdionTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
};

Accordion.Frame = function AccourdionFrame({children, ...restProps}) {
  return <Frame {...restProps}>{children}</Frame>
};

Accordion.Item = function AccourdionItem({children, ...restProps}) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccourdionHeader({children, ...restProps}) {

  const {toggleShow, setToggleShow} = useContext(ToggleContext)
//better use  - setToggleShow((toggleShow) => !toggleShow) - instead - setToggleShow(!toggleShow)
  return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}{...restProps}>{children}</Header>
};

Accordion.Body = function AccordionBody({children, ...restProps}) {
  const {toggleShow} = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}
