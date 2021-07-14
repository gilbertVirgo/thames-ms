import API from "../api";
import React from "react";
import ListItem from "../components/ListItem";
import ListHeader from "../components/ListHeader";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";



const AchievementWrapper = styled.div`
	height: 50vh;
	padding = 0;
	margin = 0;
	position: realtive;
	overflow: auto;
`;


const AchievementsDisplay = ({list}) => (
	<React.Fragment>
		{list.map((item) => (
			<div>
			  <p>{ item }</p>
			</div>
		))}
	</React.Fragment>
)


export default () => {

	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState("Loading assignment data...")
	const [error, setError] = React.useState();






	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`achievement/${id}`) /*await API.get(`achievement/${id}`);*/
					if (!response.hasOwnProperty("AchievementList"))
						throw new Error("No AchievementList");

					const AchievementList = response.AchievementList;
					const record = []
					for (let i = 0; i < AchievementList.length; i++) {
						record[i] = await API.get(AchievementList[i])
					}
					setRecord(record);
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return !loading ? (
		<React.Fragment>
			<h1> Achivements </h1>
			<AchievementsDisplay list={record}/>
		</React.Fragment>
	) : (
		"Loading..."
	);
};
