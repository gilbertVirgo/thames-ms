import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	box-sizing: border-box;
    padding: 0;
    padding: 19px 30px;

    width:100vw;
    height: calc(100vh - 137px);

    background: #F8F8F8;
`;

const ContentWapper = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;

    color: #4E4E4E;

    margin: 0;
    padding: 0;

    h1,h2,h3,h4,h5,h6{
        font-weight: 800;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 5px;
    }

    p{
        font-weight: normal;
        margin-bottom: 18px;
    }

    ul, ol{
        font-weight: normal;
        margin-bottom: 18px;
        padding-left: 25px;
    }

    li{
        margin-bottom: 5px;
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

    display: grid;
    grid-template-columns: 219px 35px;
    column-gap: 10px;
`;

const ToggleImage = styled.button`
    width: 35px;
    height: 21px;

    appearance: none;
    border: none;

    background-image: url("${require("../assets/icons/toggle - off.svg")}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent;

`;

const TaskContent = ({content}) => {
    const [toggle, setToggle] = React.useState(false);
    const SwitchToggle = () =>{

    }

	return (
		<Wrapper>
            <form>
                <ContentWapper>
                    <h4> Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat maecenas montes, nunc tellus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h1> Check List</h1>
                    <ol>
                        <li>Find attachment </li>
                        <li>Complete questions 1, 2 & 3</li>
                    </ol> 

                    <h3>Attachments</h3>
                    <a href="/images/myw3schoolsimage.jpg" download>Dowload here</a>
                    
                    {content}
                    
                </ContentWapper>
                <CompleteToggle>
                    Have you completed the task?   
                
                    <ToggleImage id="togleImg"
                        onClick={SwitchToggle()}
                        />
                </CompleteToggle>
            </form>
		</Wrapper>
	);
};

export default TaskContent;
