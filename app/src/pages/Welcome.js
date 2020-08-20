//Import from package.json
import React from "react";
import styled from 'styled-components';
//Import from components
import Login from "../components/Login"
import Header from "../components/Header"
//Imports from assets
import Stock1 from "../assets/StockImage1.jpg"
//import from bootstrap
import Overlay from 'react-bootstrap/Overlay';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//Import from theme
import theme from "../theme";
const { breakpoint } = theme;

const WelcomeContainer = styled(Container)`
  background-image: url(${Stock1});
  height: 93vh;
`

export default () => {
  return (
      <WelcomeContainer>
        <Header style={{"margin": "0 auto", "text-align": "center", "padding-top": "20px"}}
          heading={"Thames Christian School"}
          subheading={"Please sign in to continue"}/>
        <div style={{"margin": "0 auto", "align-items": "center", "padding-top": "20px"}}>
          <Login/>
        </div>
      </WelcomeContainer>
  )
}
