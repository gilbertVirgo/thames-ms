import { Caption, Heading, TableCaption } from "../components";
import { Card, Grid, Title } from "../components";

import API from "../api";
import { Button } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import React from "react";
import Section from "../components/Section";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

export default () => {
	const { id } = useParams();
	const [record, setRecord] = React.useState({
		Title: "",
	});
	const [completed, setCompleted] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [UID, setUID] = React.useState();
	const [error, setError] = React.useState();

	const handleToggleCompleted = (value) =>
		setCompleted((completed) =>
			completed.includes(value)
				? completed.filter((id) => id !== value)
				: [...completed, value]
		);

	// This is horribly messy. Because you can't remove the
	// Assignment_Title directly, you have to move the
	// assignment's corresponding ID. This must be found
	// using the index of the title in question.
	const assignmentTitleToId = (title) =>
		record.assignment_id[record.Assignment_Title.indexOf(title)];

	const handleSave = async () => {
		try {
			await API.update(`class/${UID}`, {
				// Remove completed assignments
				assignment_id: record.Assignment_Title.filter(
					(title) => !completed.includes(title)
				).map(assignmentTitleToId),
			});
		} catch (err) {
			setError(err.toString());
		}

		setLoading(true); // re-fetch
	};

	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`class/${id}`);

					if (!response.hasOwnProperty("content"))
						throw new Error("Empty response");

					const { fields, id: uid } = response.content[0];

					setRecord(fields);
					setUID(uid);
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return (
		<Section loading={loading} error={error}>
			<Header heading={record.Title} subheading={record.Year_Group} />

			{record.hasOwnProperty("Assignment_Title") &&
			record.Assignment_Title.length ? (
				<Grid>
					{record.Assignment_Title.map((title) => (
						<Card>
							<Card.Body>
								<Title>{title}</Title>
							</Card.Body>
							<Card.Footer
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "end",
								}}
							>
								<Form.Label style={{ margin: 0 }}>
									Mark as completed
								</Form.Label>
								<Form.Check
									style={{
										display: "inline-block",
										marginLeft: "10px",
										verticalAlign: "middle",
									}}
									onChange={handleToggleCompleted.bind(
										null,
										title
									)}
								/>
							</Card.Footer>
						</Card>
					))}
				</Grid>
			) : (
				<p>No active assignments</p>
			)}
			<Form.Group>
				{completed.length > 0 && (
					<Button
						variant="contained"
						color="primary"
						onClick={handleSave}
					>
						Save
					</Button>
				)}
			</Form.Group>
		</Section>
	);
};
