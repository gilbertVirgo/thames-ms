import API from "../api";
import Menu from "../components/Menu";
import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileHeader from "../components/ProfileHeader";
import ProfilePoints from "../components/ProfilePoints";
import ProfileCommendations from "../components/ProfileCommendations";
import ProfileContent from "../components/ProfileContent";

import cheerio from "cheerio";
import moment from "moment";
import { useParams } from "react-router-dom";
import useRole from "../hooks/useRole";

export default () => {
	const [role] = useRole();
	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState();
	

	React.useEffect(() => {
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
			<ProfilePoints points="125" />
            <ProfileInfo 
				year="5" //{record.Year_Group}
				tutor="smone"
				email="email.co.uk"
			 />
			<ProfileCommendations />
			<ProfileContent 
				achievement="James has shown great leadership qualities in DofE preperations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci purus purus diam, gravida nunc accumsan odio eleifend. "
			/>
            <Menu activeAssignment={false} activeAvatar={true}/>
		</React.Fragment>
	);
};
