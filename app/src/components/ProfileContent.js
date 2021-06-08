import React from "react";
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 0;
	padding: 19px 30px;

	width: 100vw;
	max-width: 540px;
	height: calc(100vh - 152px);

	background: #f8f8f8;
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




const ProfileContent = ({ title, complete, children, onChange, ...props }) => {
	const [checked, setChecked] = React.useState(complete);

	const handleChange = () => {
		setChecked(!checked);
		onChange();
	};

	return (
		<Wrapper>
			<ContentWapper>{children}</ContentWapper>
		</Wrapper>
	);
};

export default ProfileContent;
