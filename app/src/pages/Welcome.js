//Import from package.json
import React from "react";
import styled from 'styled-components';
//Import from components
import Login from "../components/Login"
import Header from "../components/Header"
//Imports from assets
import Stock1 from "../assets/StockImage1.jpg"
import Stock2 from "../assets/StockImage2.jpg"
//import from bootstrap
import Overlay from 'react-bootstrap/Overlay';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//Import from theme
import theme from "../theme";
const { breakpoint } = theme;


export default () => {
  return (
      <Container>
        <Row>
          <Col>
            <Image src={Stock1} style={{"max-width":"300px", "height":"93vh"}}/>
          </Col>
          <Col>
            <Header
              heading={"Thames Christian School"}
              subheading={"Please sign in to continue"}/>
            <Login/>
          </Col>
          <Col>
            <Image src={Stock2} style={{"max-width":"300px", "height":"93vh"}}/>
          </Col>
        </Row>
      </Container>
  )
}
