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
	const [dueButtonText, setDueButtonText] = React.useState("Count Down");
	const [table, setTable] = React.useState([]);
	const [dueDateSwitch, setDueDateSwitch] = React.useState(false);


	const history = useHistory();

	const translateDate = (date) => {
		if(dueButtonText === "Count Down") {
			return moment(new Date(date)).format("ll")
		} else {
			date = moment(new Date(date));
			const now = moment(new Date());
			const diff = moment.duration(date.diff(now)).days();
			if (diff > 0) {
				return `${Math.abs(diff)} day${diff !== 1 ? "s" : ""}`;
			} else if (diff < 0) {
				return `Overdue`;
			} else if (diff == 0) {
				return `Today`;
			}
		}
	}

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
				setDueButtonText(dueButtonText)
				setLoading(false);
			} catch (err) {
				setError(err.toString());
			}
		})();
	}, []);

	const getStatus = () => {
		setDueDateSwitch(!dueDateSwitch);
		if(dueDateSwitch===false){
			setDueButtonText("Due")
		}else{
			setDueButtonText("Count Down")
		}
	};

	return (
		// <Section title="Assignments" loading={loading} error={error}>
		<React.Fragment>
			<TasksWrapper>
				<ListHeader title="Tasks">
					<CountDateButton onClick={()=>getStatus()}>{dueButtonText}</CountDateButton>
				</ListHeader>
				{table.length ? (
					table.map(({ fields }, index) => (
						<ListItem
							title={fields.Title}
							date={translateDate(fields.Due)}
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
