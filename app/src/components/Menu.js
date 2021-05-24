import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    box-sizing: border-box;
    position: sticky;
    bottom: 0;
    left: 0;
    height: 65px;
    max-height: 65px;
    min-height: 65px;
    width: 100vw;
    max-width: 540px;

    text-align: center;
    border-top: 2px solid #AAAAAA;
    background-color: white;

    z-index: 1500;
    

    display: grid;
    justify-items: center;
    align-items: center;
    /* grid-template-areas: "left right"; */
    grid-template-columns: repeat(2, 1fr);
`;

const NavItem = styled.div`
    width: 24px;
    height: 24px;
    background-image: url("${({ image }) => image}");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;


const Menu = () => {
	return (
		<Wrapper>
            <a href="/"><NavItem image={require("../assets/icons/book-open.svg")} /></a>
            <NavItem image={require("../assets/icons/profile.svg")} />
		</Wrapper>
	);
};

export default Menu;
