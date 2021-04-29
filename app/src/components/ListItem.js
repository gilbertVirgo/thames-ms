import React from "react";
import styled from "styled-components";
import {Grid} from "./index";

const Wrapper = styled.div`
	box-sizing: border-box;
    margin: 0;
    padding: 0;

    /* font-family: Nunito;
    font-style: normal; */
    font-weight: 800;
    font-size: 15px;
    line-height: 14px;

    height: 53px;
    padding: 14.5px 20px;
    width: 100%;

    border-bottom: 2px solid #EEEEEE;
    
    display: grid;
    grid-template-areas: "title date button";
    grid-template-columns: repeat(7, 1fr); //136px 149px 24px;
    column-gap: 10px;

    background-color: white;


    ${({heading})=>heading && `
        position: fixed;
        height: 60px;
        padding: 14.5px 14px;
        border-bottom: 2px solid #AAAAAA;
        ${Title}{
            font-weight: 800;
            font-size: 25px;

            color: #4E4E4E;
        }
        ${Date}{
            display: none;
        } 
        ${ViewMore}{
            display: none;
        }
    `}

    ${({reminder})=>reminder && `
        ${Title}{
            color: #E8927C;
        }    
    `}

    ${({complete})=>complete && `   
        background-color: #E6EEE1;
        border: none;
        ${Title}{
            color: #002E5D;
        }
        ${Date}{
            color: #002E5D;
        } 
    `}
    ${({checked})=>checked && `
        ${Title}{
            color: #EAAA00;
        }
        ${Date}{
            color: #EAAA00;
        }
        ${ViewMore}{
            background-image: url("${require("../assets/icons/check.svg")}");
        }   
    `}
`;

const Title = styled.h6`  
/* grid-area: title; */
    grid-column: span 3;
    color: #4E4E4E;
    margin: 0;
    padding: 0;
`;

const Date = styled.h6`
/* grid-area: date; */
    grid-column: span 3;
    color: #5CBDE5;
    margin: 0;
    padding: 0;
`;

const ViewMore = styled.button`
/* grid-area: button; */
    grid-column: 7 /-1;

	appearance: none;
    border: none;

    width: 24px;
    height: 24px;

    background-image: url("${require("../assets/icons/chevron-right.svg")}");
    background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
    background-color: transparent;

`;

const ListItem = ({ title, date, onOpen, heading, reminder, complete, checked, children, ...props }) => {
	return (
		<Wrapper
            {...props}
            heading={heading}
            reminder={reminder}
            complete={complete}
            checked={checked}
		>
        {/* <Grid> */}
                <Title>{title}</Title>
                <Date> {date} </Date>
                <ViewMore OnClick ={onOpen} />
                {children}
        {/* </Grid> */}
		
		</Wrapper>
	);
};

export default ListItem;
