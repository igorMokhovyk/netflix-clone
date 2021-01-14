import React from "react";
import {Container, Inner, Pane, Item, Title, SubTitle, Image} from './styles/jumbotron'

// eslint-disable-next-line react/prop-types,no-unused-vars
function Jumbotron({children, direction = 'row', ...restProps}) {
  return (
    <Item >
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}

// eslint-disable-next-line react/prop-types
Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

// eslint-disable-next-line react/prop-types
Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
  return <Pane {...restProps}>{children}</Pane>
}

// eslint-disable-next-line react/prop-types
Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

// eslint-disable-next-line react/prop-types
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
  return <Image {...restProps}/>
}
export default Jumbotron;
