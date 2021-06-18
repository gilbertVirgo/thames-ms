import API from "../api";
import Menu from "../components/Menu";
import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileHeader from "../components/ProfileHeader";
import ProfilePoints from "../components/ProfilePoints";
import ProfileCommendations, {CommendationsWrapper} from "../components/ProfileCommendations";
import ProfileContent from "../components/ProfileContent";
import styled from "styled-components";

import cheerio from "cheerio";
import moment from "moment";
import { useParams } from "react-router-dom";
import useRole from "../hooks/useRole";

const ContentWrapper = styled.div`
	height: calc(100vh - 130px);
	width: 100vw;
	max-width: 540px;

	padding: 0;
	margin: 0;

	position: relative;
	overflow: auto;

	background: #E8E6DF;
`;

const Wrapper = styled.div`
	box-sizing: border-box;
    padding: 0;
    margin: 0;
	overflow: hidden;
	height: 100vh;

`;

export default () => {
	const [role] = useRole();
	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState();

	const [show, setShow] = React.useState(false);
	const [systemTitle, setSystemTitle] =  React.useState("Points:");
	const [systemCounter, setSystemCounter] = React.useState(0);
	const [commendations, setCommendations] = React.useState([]);
	const [reports, setReports] = React.useState();
	const [achievement, setAchievement] = React.useState("");
	
	const CheckYear = (year, points, comms) =>{
		const string = year.toString();
		const number = string.replace(/\D/g, "");
		console.log("My year :", number)
		setSystemCounter(points);
		if(number > 9){
			setShow(true);
			setSystemTitle("Commendations:")
			setSystemCounter(comms);
		}
	}

	const parseContent = (content) => {
		const $ = cheerio.load(content);

		$("a").prepend(
			`<img src='${require("../assets/icons/paperclip-pink.svg")}' />`
		);

		return $.html()
			.replace("<html><head></head><body>", "")
			.replace("</body></html>", "");
	};



	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`/me`);
					// const response = await API.get(`student/${id}`);

					if (!response.hasOwnProperty("content"))
						throw new Error("Empty response");

					const record = response.content[0].fields;
					setRecord(record);
					
					console.log("Record is", record);

					CheckYear(record.Year_Group, record.Green_Points, record.Commendations.length);
					setAchievement(parseContent(record.Achievement));
					setReports(parseContent(record.Reports));
					console.log("reports", record.Reports);
					setCommendations(record.Commendations_Name);

					setLoading(false);

				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return !loading ? (
		<React.Fragment>
		<Wrapper>
			<ProfileHeader
                name={record.Forename +" "+ record.Surname}
				// {`${record.Forename} ${record.Surname}`}
                pointssystem={systemTitle}
                points={systemCounter}
			/>
			<ContentWrapper>
				<ProfilePoints show={show} points={systemCounter} />
				<ProfileInfo 
					year={record.Year_Group}
					tutor={record.Tutor}
					email={record.Email}
				/>
				
				<CommendationsWrapper show={show}>
				{commendations.length ? (
					commendations.map(commendation => ( 
					<ProfileCommendations>{commendation}</ProfileCommendations>
				))
				):('')}
				</CommendationsWrapper>
					
				<ProfileContent achievement={achievement} report>
					<div dangerouslySetInnerHTML={{ __html: reports }} />
				</ProfileContent>
					{/* achievement={record.Achievement} */}
				 
			</ContentWrapper>
            <Menu activeAssignment={false} activeAvatar={true} assignmentCounter="6" />
			</Wrapper>
		</React.Fragment>
	) : (
		"Loading..."
	);
};
