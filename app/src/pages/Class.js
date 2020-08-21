import { Caption, Heading, TableCaption } from "../components";
import { FullCard, Grid, Title } from "../components";

import API from "../api";
import { Button } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import React from "react";
import Section from "../components/Section";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"
import Dropdown from "react-bootstrap/DropDown"
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
					console.log(response.content)
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
						<FullCard>
							<FullCard.Body>
								<Title>{title}</Title>
							</FullCard.Body>
							{record.Student_name.map((value, index) => (
							<FullCard.Footer
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "end",
								}}
							>
									<FullCard.Body
										style={{
											"padding-top" : "0px",
											"padding-bottom" : "2.5px",
											"font-size": "15px"
										}}>
										{record.Student_name[index] + " " + record.Student_surname[index]}
									</FullCard.Body>
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
									<Dropdown>
									  <Dropdown.Toggle variant="success" id="dropdown-basic">
									    Effort
									  </Dropdown.Toggle>

									  <Dropdown.Menu>
									    <Dropdown.Item href="#/action-1">1 Star</Dropdown.Item>
									    <Dropdown.Item href="#/action-2">2 Stars</Dropdown.Item>
									    <Dropdown.Item href="#/action-3">3 Stars</Dropdown.Item>
											<Dropdown.Item href="#/action-2">4 Stars</Dropdown.Item>
											<Dropdown.Item href="#/action-3">5 Stars</Dropdown.Item>
									  </Dropdown.Menu>
									</Dropdown>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>Comment:</InputGroup.Text>
										</InputGroup.Prepend>
									 <FormControl as="textarea" aria-label="With textarea" />
									</InputGroup>
							</FullCard.Footer>
								))}
						</FullCard>
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
