import { Card, Grid, Paragraph, Title } from "../../components";

import API from "../../api";
import React from "react";
import Section from "../../components/Section";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default () => {
	const [loading, setLoading] = React.useState("Loading assignments...");
	const [error, setError] = React.useState(null);
	const [table, setTable] = React.useState([]);

	const history = useHistory();

	React.useEffect(() => {
		(async function () {
			try {
				const response = await API.get("assignments");

				if (!response.hasOwnProperty("content"))
					throw new Error("Empty response");

				setTable(response.content);
				setLoading(false);
			} catch (err) {
				setError(err.toString());
			}
		})();
	}, []);

	const getDueMessage = (due) => {
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
		<Section title="Assignments" loading={loading} error={error}>
			<Grid>
				{table.map(({ fields }, index) => (
					<Card
						onClick={() => history.push(`/assignment/${fields.id}`)}
						key={`assignment-${index}`}
					>
						<Card.Body>
							<Title>{fields.Title}</Title>
							<Paragraph>{fields.Class_Name}</Paragraph>
						</Card.Body>
						<Card.Footer>{getDueMessage(fields.Due)}</Card.Footer>
					</Card>
				))}
			</Grid>
		</Section>
	);
};
