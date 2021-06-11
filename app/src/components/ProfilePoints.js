import React from "react";
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	width: 100vw;
	max-width: 540px;
	height: 128px;

	background: #E6EEE1;

`;

const PointsWrapper = styled.div`
	padding: 22px 39px;
	margin: 0;

	display: grid;
    grid-template-columns:84px auto;
    grid-template-rows: 36px 36px;
    grid-template-areas: 
        "image title"
        "image points";
    column-gap: 20px;
    row-gap: 3px;

	font-style: normal;
	color: #002E5D;
`;

const Title = styled.h6`
	grid-area: title;
	align-self: end;
	margin: 0;

	font-weight: 800;
	font-size: 15px;
	line-height: 20px;
`;

const Points = styled.h1`
	grid-area: points;
	align-self: start;
	margin: 0;
	
	font-weight: 800;
	font-size: 35px;
    line-height: 48px;
	
`;

const PointsIcon = styled.div`
    grid-area: image;
	width: 84px;
	height: 84px;

	background-image: url("${require("../assets/icons/Points.svg")}");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: transparent;
`;




const ProfilePoints = ({points}) => {

	return (
		<Wrapper>
            <PointsWrapper>
                <PointsIcon />
                <Title>Points Collected </Title>
                <Points>{points}</Points>
            </PointsWrapper>
		</Wrapper>
	);
};

export default ProfilePoints;
