import API from "../api";
import Menu from "../components/Menu";
import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileHeader from "../components/ProfileHeader";
import ProfilePoints from "../components/ProfilePoints";
import ProfileCommendations from "../components/ProfileCommendations";
import ProfileContent from "../components/ProfileContent";
import styled from "styled-components";

import cheerio from "cheerio";
import moment from "moment";
import { useParams } from "react-router-dom";
import useRole from "../hooks/useRole";

const ContentWrapper = styled.div`
	height: calc(100vh - 65px);
	width: 100vw;
	max-width: 540px;

	padding: 0;
	margin: 0;
	
	position: relative;
	overflow: auto;
`;

const Wrapper = styled.div`
	box-sizing: border-box;
    padding: 0;
    margin: 0;
	overflow: hidden;

`;

export default () => {
	const [role] = useRole();
	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState();

	const [year, setYear] = React.useState(10);
	const [show, setShow] = React.useState(false);
	

	React.useEffect(() => {
		// delete later
		if(year > 9){
			console.log(year);
			setShow(true);
		}

		if (loading) {
			(async function () {
				try {
					const response = await API.get(`student/${id}`);

					console.log("student call successful");

					if (!response.hasOwnProperty("content"))
						throw new Error("Empty response");

					console.log(response);

					setRecord(response.content[0].fields);
					console.log("Record is", record);
					setLoading(false);

					
					if(year < 9){
						console.log(year);
						setShow(true);
					}
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return(
		<React.Fragment>
			<ProfileHeader
                name="My name"
				// {`${record.Forename} ${record.Surname}`}
                pointssystem ="Commendations:"
                points="125"
			/>
			<ContentWrapper>
				<ProfilePoints show={show} points="125" />
				<ProfileInfo 
					year={year} //{record.Year_Group}
					tutor="smone"
					email="email.co.uk"
				/>
				<ProfileCommendations show={show}/>
				<ProfileContent 
					achievement="James has shown great leadership qualities in DofE preperations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci purus purus diam, gravida nunc accumsan odio eleifend. "
				/>
			</ContentWrapper>
            <Menu activeAssignment={false} activeAvatar={true}/>
		</React.Fragment>
	);
};
