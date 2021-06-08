import React from "react";
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 0;
	padding: 0;

	width: 100vw;
	max-width: 540px;
	height: calc(100vh - 130px);

	background: #E8E6DF;

`;

const StudentInfoWrapper = styled.div`
	padding: 36px 30px 36px 39px;
	margin: 0;

	display: grid;
    grid-template-rows: 64px 64px;
    row-gap: 12px;

	font-style: normal;
	font-size: 15px;
	line-height: 20px;

	color: #4E4E4E;
`;

const ClassInfo = styled.div`
	display: grid;
	grid-template-areas: 
        "class tutor"
        "year name"; 
	column-gap: 40px;
	row-gap: 5px;
    grid-template-columns: 13% 42%;
	grid-template-rows: 19px 40px;
`;

const EmailInfo = styled.div`
	display: grid;
	grid-template-areas: 
        "title"
        "email"; 
	row-gap: 5px;
	grid-template-rows: 19px 40px;
`;

const InfoTitle = styled.h5`
	grid-area: class;
	margin: 0;
	
	font-weight: 800;

	${({tutor})=>tutor && `
        grid-area: tutor; 
    `}
	${({email})=>email && `
        grid-area: title; 
    `}
`;

const InfoContent = styled.p`
	grid-area: year;
	background: #FFFFFF;
	border-radius: 3px;
	padding: 10px;
	margin: 0;

	font-weight: 600;

	${({tutor})=>tutor && `
        grid-area: name; 
    `}
	${({email})=>email && `
        grid-area: email; 
    `}
`;

const ContentWapper = styled.div`
	font-weight: 600;
	font-size: 15px;
	line-height: 20px;

	color: #4e4e4e;

	margin: 0;
	padding: 0;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 800;
		font-size: 15px;
		line-height: 20px;
		margin-bottom: 5px;
	}

	p {
		font-weight: normal;
		margin-bottom: 18px;
	}

	ul,
	ol {
		font-weight: normal;
		margin-bottom: 18px;
		padding-left: 25px;
	}

	li {
		margin-bottom: 5px;
	}

	a {
		margin: 18px 10px;
		display: block;
		color: #4e4e4e;

		img {
			padding-right: 7px;
			padding-left: 10px;
		}
	}
`;

const Attachment = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 20px 227px;
	column-gap: 7px;
`;

const AttachmentImage = styled.div`
	width: 20px;
	height: 20px;

	background-image: url("${require("../assets/icons/paperclip.svg")}");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: transparent;
`;




const ProfileContent = ({  }) => {

	return (
		<Wrapper>
			<StudentInfoWrapper>
				<ClassInfo>
					<InfoTitle>Year</InfoTitle>
					<InfoContent>9</InfoContent>

					<InfoTitle tutor>Form Tutor</InfoTitle>
					<InfoContent tutor>Mr Reid</InfoContent>

				</ClassInfo>
				<EmailInfo>
					<InfoTitle email>Email</InfoTitle>
					<InfoContent email>jjsmith@thameschristiancollege.org.uk</InfoContent>
				</EmailInfo>
			</StudentInfoWrapper>
		</Wrapper>
	);
};

export default ProfileContent;
