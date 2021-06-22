import { Edit } from "@material-ui/icons";
import React from "react";
import styled, {keyframes} from "styled-components";
import API from "../api";

const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	width: 100%;//100vw;
	/* max-width: 540px; */
	height: 100%;
    /* calc(100vh - 65px); */

	background: #E8E6DF;

`;
const Achievement = styled.div`
	background-color: #99D6EA;
    padding: 36px 39px;
    margin: 0;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;

    color: #4E4E4E;

    margin: 0;
    margin-bottom: 4px;
`;

const Content = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;

    color: #4E4E4E;
    background: #FFFFFF;
    border-radius: 3px;
    padding: 10px;
`;
const GeneralLinks = styled.div`
	padding: 30px;
	margin: 0;

    ${Title}{
        margin-bottom: 9px;
    }
`;

const Reports = styled.div`
	padding: 0 30px;
    padding-bottom: 30px;
	margin: 0;

    ${Title}{
        margin-bottom: 9px;
    }
`;

const Link = styled.div`
	padding: 0;
	margin: 0;
    margin-bottom: 10px;

    width: 100%;
    height: 20px;

	display: grid;
    grid-template-columns: 31px auto;
    column-gap: 7px;

    ${({report})=>report && `
        display: block; 
    `}

	font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    a{
        color: #002E5D;
        margin: 0;
        margin-bottom: 10px;
        display: block;

        img {
			padding-right: 7px;
			padding-left: 11px;
		}
    }

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #002E5D;
        cursor: pointer;
    }
`;



const AttachmentImage = styled.div`
	width: 20px;
	height: 20px;
    justify-self: end;

	background-image: url("${require("../assets/icons/paperclip-pink.svg")}");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: transparent;
`;


const  data=[
    {
        link: "",
        title: "first link",
    },
    {
        link: "",
        title: "first link",
    },
    {
        link: "",
        title: "first link",
    }
]



const ProfileContent = ({children, achievement, report, ...props}) => {
    const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState();

    React.useEffect(() => {
        if (loading) {
            (async function () {
                try {
                    const response = await API.get(`/general`);

                    if (!response.hasOwnProperty("content"))
                        throw new Error("Empty response");

                    const record = response.content;
                    setRecord(record);

                    setLoading(false);
                    
                } catch (err) {
                    setError(err.toString());
                }
            })();
        }
    }, [loading]);

	return !loading ? (
		<Wrapper {...props}>
			<Achievement>
                <Title>Achievement</Title>
                <Content>{achievement}</Content>
            </Achievement>
            <GeneralLinks>
                <Title>Useful Information</Title>
                {record.map(({fields})=>(
                    <Link>
                        <AttachmentImage />
                        <a href={fields.Link}>{fields.Name}</a>
                    </Link>
                ))}
            </GeneralLinks>
            <Reports>
                <Title>Reports</Title>
                {/* {reports.map(({link, title})=>( */}
                    <Link report={report}>
                        {children}
                        {/* <AttachmentImage />
                        <a href={link}>{repo}</a> */}
                    </Link>
                {/* ))} */}
            </Reports>
		</Wrapper>
	) : (
		"Loading..."
	);
};

export default ProfileContent;