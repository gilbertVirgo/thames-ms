import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	box-sizing: border-box;
    padding: 0;
    padding: 19px 30px;

    width:100vw;
    height: 100vh;

    background: #F8F8F8;
`;

const Content = styled.div`
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;

    color: #4E4E4E;

    margin: 0;
    padding: 0;

    h1,h2,h3,h4,h5,h6{

    }

    p{
        font-weight: 600;
    }

    input{

    }

`;


const Attachment = styled.div`

`;

const CompleteToggle = styled.div`
    margin-top: 38px;
    padding: 18px 23px;
    width: 100%;
    height: 62px;

    border-radius: 3px;
    background: #FFFFFF;
    border: 3px solid #EAAA00;

    color: #002E5D;
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;
`;

const ToogleImage = styled.img`

`;

const TaskContent = ({content}) => {
	return (
		<Wrapper>
            <Content>
                {content}
                
            </Content>
		    <CompleteToggle>
                 Have you completed the task?   
            </CompleteToggle>
		</Wrapper>
	);
};

export default TaskContent;
