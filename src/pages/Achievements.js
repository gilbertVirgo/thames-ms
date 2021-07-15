import API from "../api";
import React from "react";
import AchievementCard from "../components/AchievementCard";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import useRole from "../hooks/useRole";
import styled from "styled-components";


export default () => {

	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState("Loading assignment data...")
	const [error, setError] = React.useState();






	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`achievements/${id}`) /*await API.get(`achievement/${id}`);*/


					if (! response.hasOwnProperty('content')) {
					  throw new Error('no response content')
					}

					const achievements = response.content.map(({ fields }) => fields)

					setRecord(achievements);
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return !loading ? (
		<React.Fragment>
			<h1> Achivements</h1>
			<div>{ list.map(ach => <AchievementCard achievement={achievement} list={list} />) }</div>
		</React.Fragment>
	) : (
		"Loading..."
	);
};
