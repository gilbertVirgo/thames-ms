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
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
    background-image: url("${({ activeAssignment }) =>
		activeAssignment
			? require("../assets/icons/book-open.svg")
			: require("../assets/icons/book-off.svg")}");
    ${({avatar})=>avatar && `
        background-image: url("${({ activeAvatar }) =>
		activeAvatar
			? require("../assets/icons/Avatar.svg")
			: require("../assets/icons/Avatar-off.svg")}");
    `}

    

`;

const NavProfile = styled.div`
    width: 24px;
    height: 24px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
    background-image: url("${({ activeAvatar }) =>
		activeAvatar
			? require("../assets/icons/Avatar.svg")
			: require("../assets/icons/Avatar-off.svg")}");
   
`;

const Counters= styled.div`
    position: absolute;
    top: -3px;
    right: -7px;

    width: 15px;
    height: 15px;

    background: ${({assignmentColor}) => assignmentColor ? "#5CBDE5" : "#40C1AC"}; 
    border-radius: 50px;

    font-style: normal;
    font-weight: 600;
    font-size: 7px;
    line-height: 14px;
    color: #4E4E4E;

`;


const MenuWrapper=styled.a`
    position: relative;
`;


const Menu = ({activeAssignment, activeAvatar, assignmentCounter, pointsCounter}) => {
	
    React.useEffect(() => {
		(async function () {
			
		})();
	}, []);
    
    return (
		<Wrapper>
            <MenuWrapper href="/">
                <NavItem activeAssignment={activeAssignment} />
                <Counters assignmentColor={true}>6</Counters>
            </MenuWrapper>
            <MenuWrapper href="/profile">
                <NavProfile activeAvatar={activeAvatar} />
                <Counters assignmentColor={false}>130</Counters>
            </MenuWrapper>
		</Wrapper>
	);
};

export default Menu;
