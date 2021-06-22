import React from "react";
import styled, {keyframes} from "styled-components";


const Wrapper = styled.div`
	width: 100%;
    height: 100%;
	margin: 30px auto;

    background: #E6EEE1;

`;

const Button = styled.button`
	width: 100%;
    max-width: 315px;
	height: 62px;

    padding: 18px 23px;
    margin: 0;

	appearance: none;
	border: 3px solid #CE0F69;
    border-radius: 3px;
    text-align: center;


	background: #FFFFFF;
    color: #002E5D;

    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;

`;

const LogoutButton = ({ ...props }) => {
	return (
		<Wrapper {...props}>
            <Button>Sign Out</Button>
		</Wrapper>
	);
};

export default LogoutButton;