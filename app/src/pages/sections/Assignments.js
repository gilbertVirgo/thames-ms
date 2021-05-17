import { Card, Grid, Paragraph, Title } from "../../components";

import API from "../../api";
import CountDateButton from "../../components/CountDateButton";
import ListHeader from "../../components/ListHeader";
import ListItem from "../../components/ListItem";
import Menu from "../../components/Menu";
import React from "react";
import Section from "../../components/Section";
import moment from "moment";
import queryString from "query-string";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const TasksWrapper = styled.div`
	height: 50vh;
	padding: 0;
	margin: 0;
	position: relative;
	overflow: auto;
`;

const CompletedWrapper = styled.div`
	height: 50vh;
	padding: 0;
	margin: 0;
	position: sticky;
	overflow: auto;
`;

export default ({ query = null }) => {
	const [loading, setLoading] = React.useState("Loading assignments...");
	const [error, setError] = React.useState(null);
	const [table, setTable] = React.useState([]);

	const history = useHistory();

	React.useEffect(() => {
		(async function () {
			try {
				// Looks like a call to /reviews might make more sense. Just need to add fields in for the title of the assignment etc...

				const response = await API.get(
					"assignments" +
						(query !== null
							? `?${queryString.stringify(query)}`
							: "")
				);

				if (!response.hasOwnProperty("content"))
					throw new Error("Empty response");

				console.log("table", response.content);

				setTable(response.content);
				setLoading(false);
			} catch (err) {
				setError(err.toString());
			}
		})();
	}, []);

	const getStatus = (due) => {
		due = moment(new Date(due));
		const now = moment(new Date());
		const diff = moment.duration(due.diff(now)).days();

		if (diff > 0) {
			return `Due in ${Math.abs(diff)} day${diff !== 1 ? "s" : ""}`;
		} else if (diff < 0) {
			return `Due ${Math.abs(diff)} day${diff !== -1 ? "s" : ""} ago`;
		} else {
			return `Due today`;
		}
	};

	return (
		// <Section title="Assignments" loading={loading} error={error}>
		<React.Fragment>
			<TasksWrapper>
				<ListHeader title="Tasks">
					<CountDateButton>Count Down</CountDateButton>
				</ListHeader>
				{table.length ? (
					table.map(({ fields }, index) => (
						<ListItem
							title={fields.Title}
							date={fields.Due}
							onClick={() =>
								history.push(`/assignment/${fields.id}`)
							}
							key={`assignment-${index}`}
						/>
					))
				) : (
					<p>No active assignments</p>
				)}
			</TasksWrapper>
			<CompletedWrapper>
				<ListHeader
					title="Completed"
					style={{ border: "none" }}
				></ListHeader>
				{table.length ? (
					table.map(({ fields }, index) => (
						<ListItem
							title={fields.Title}
							date={fields.Due}
							reminder
							onClick={() =>
								history.push(`/assignment/${fields.id}`)
							}
							key={`assignment-${index}`}
						/>
					))
				) : (
					<p>No active assignments</p>
				)}
			</CompletedWrapper>
		</React.Fragment>
	);
};
