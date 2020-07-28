import { Caption, Heading, TableCaption } from "../components";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

export default () => {
	const { id } = useParams();
	const [requestStatus, setRequestStatus] = React.useState(null);
	const [record, setRecord] = React.useState(null);
	const [completed, setCompleted] = React.useState([]);
	const [saveFeedback, setSaveFeedback] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

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
		const { data } = await axios.patch(
			`http://localhost:8000/api/class/${id}`,
			{
				// Remove completed assignments
				assignment_id: record.Assignment_Title.filter(
					(title) => !completed.includes(title)
				).map(assignmentTitleToId),
			}
		);

		if (data.message) setSaveFeedback(data.message);

		setLoading(true);
	};

	React.useEffect(() => {
		if (loading) {
			(async function () {
				const { data, status } = await axios.get(
					`http://localhost:8000/api/class/${id}`
				);

				if (data && data.hasOwnProperty("record"))
					setRecord(data.record);

				setLoading(false);
			})();
		}
	}, [loading]);

	return !loading ? (
		<React.Fragment>
			<Heading>{record.Title}</Heading>
			{record.hasOwnProperty("Assignment_Title") &&
			record.Assignment_Title.length ? (
				<Form.Group>
					<Caption>Assignments</Caption>
					<Table striped bordered>
						<thead>
							<tr>
								<TableCaption>Title</TableCaption>
								<TableCaption>Completed</TableCaption>
							</tr>
						</thead>
						<tbody>
							{record.Assignment_Title.map((title) => (
								<tr>
									<td>{title}</td>
									<td>
										<Form.Check
											onChange={handleToggleCompleted.bind(
												null,
												title
											)}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Form.Group>
			) : (
				<p>No active assignments</p>
			)}
			<Form.Group>
				{completed.length > 0 && (
					<Button variant="light" onClick={handleSave}>
						Save
					</Button>
				)}
			</Form.Group>
			{saveFeedback && <p>{saveFeedback}</p>}
		</React.Fragment>
	) : (
		<ActivityIndicator>Loading class</ActivityIndicator>
	);
};
