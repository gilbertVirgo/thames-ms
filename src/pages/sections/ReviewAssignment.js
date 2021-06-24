import API from "../../api";
import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import Section from "../../components/Section";
import Table from "react-bootstrap/Table";
import queryString from "query-string";

export default ({ assignmentId }) => {
	const [loading, setLoading] = React.useState("Loading reviews...");
	const [error, setError] = React.useState();
	const [reviews, setReviews] = React.useState();

	const fetchReviews = async () => {
		try {
			setLoading("Fetching reviews...");
			const response = await API.get(
				`reviews?${queryString.stringify({
					assignment_id: assignmentId,
				})}`
			);

			if (!response.hasOwnProperty("content"))
				throw new Error("Empty response");

			console.log("content", response.content);

			setReviews(response.content);
			setLoading(false);
		} catch (err) {
			console.error(err);
			setError(err.toString());
		}
	};

	const editReview = async (review_id, props) => {
		const review = reviews.find(({ id }) => id === review_id);

		Object.keys(props).forEach((key) => {
			review.fields[key] = props[key];
		});

		const {
			Teacher_Checked,
			Status,
			Effort,
			// Green_Points,
			Feedback,
		} = review.fields;

		try {
			setLoading("Updating reviews...");

			const response = await API.update(`review/${review_id}`, {
				Teacher_Checked,
				Status,
				Effort,
				// Green_Points,
				Feedback,
			});

			if (!response.hasOwnProperty("content"))
				throw new Error("Empty response");

			setLoading(false);

			fetchReviews();
		} catch (err) {
			console.error(err);
			setError(err.toString());
		}

		// setReviews(copy);
	};

	React.useEffect(() => {
		fetchReviews();
	}, []);
// I have created new field called Status that is a dropdown menu with options Waiting for feedback as default, Re-submit, Handled In
	return (
		<Section title="Review" error={error}>
			{loading && <ActivityIndicator inline>{loading}</ActivityIndicator>}
			<Table style={{ minWidth: "1000px" }} striped bordered>
				<thead>
					<tr>
						<th>Name</th>
						<th>Handed in?</th>
						<th>Status</th>
						<th>Effort</th>
						<th>Feedback</th>
						{/* <th>Re-submit?</th> */}
					</tr>
				</thead>
				<tbody>
					{reviews &&
						reviews.map(({ fields }, index) => (
							<tr key={`row-${index}`}>
								<td key={`td-${1}`}>
									<Link to={`/student/${fields.student_id}`}>
										{fields.Student_Surname},{" "}
										{fields.Student_Forename}
									</Link>
								</td>
								<td key={`td-${2}`}>
									<Form.Check
										value={fields.Teacher_Checked}
										checked={fields.Teacher_Checked}
										onChange={({ target }) =>
											editReview(fields.id, {
												Teacher_Checked: target.checked,
											})
										}
									/>
								</td>
								<td key={`td-${3}`}>
									<Form.Check
										value={fields.Status}
										checked={fields.Status}
										onChange={({ target }) =>
											editReview(fields.id, {
												Status: target.checked,
											})
										}
									/>
								</td>
								<td key={`td-${4}`}>
									<Rating
										value={fields.Effort}
										defaultValue={0}
										onChange={({ target }) =>
											editReview(fields.id, {
												Effort: target.value,
											})
										}
									/>
								</td>
								<td key={`td-${5}`}>
									<Form.Control
										value={fields.Feedback}
										onBlur={({ target }) =>
											editReview(fields.id, {
												Feedback: target.value,
											})
										}
									/>
								</td>
								{/* <td key={`td-${6}`}>
									<Form.Check
										value={fields.Not_Applicable}
										checked={fields.Not_Applicable}
										onChange={({ target }) =>
											editReview(fields.id, {
												Not_Applicable: target.checked,
											})
										}
									/>
								</td> */}
							</tr>
						))}
				</tbody>
			</Table>
		</Section>
	);
};
