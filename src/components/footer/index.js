import React from "react";
import {Container, Row, Column, Link, Title, Text, Break} from "./styles/footer";
import PropTypes from 'prop-types';

// [React] Solution for ‘children’ is missing in props validation eslint(react/prop-types)
// [1] Install prop-types package with npm i prop-types --save
// [2] Import prop-types module to your js file.
// [3] Specify prop types.
// https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7

export default function Footer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Row = function FooterRow({children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>;
}

Footer.Row.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Column = function FooterColumn({children, ...restProps}) {
  return <Column {...restProps}>{children}</Column>;
}

Footer.Column.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Link = function FooterLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>;
}

Footer.Link.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Title = function FooterTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
}

Footer.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Text = function FooterText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>;
}

Footer.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Break = function FooterBreak({children, ...restProps}) {
  return <Break {...restProps}>{children}</Break>;
}

Footer.Break.propTypes = {
  children: PropTypes.node.isRequired,
};

