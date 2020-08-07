import { Card, Grid, Paragraph, Title } from "../../components";

import API from "../../api";
import React from "react";
import { Section } from "../../components/Section/Section";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();

	const [loading, setLoading] = React.useState("Loading classes...");
	const [error, setError] = React.useState();
	const [table, setTable] = React.useState();

	React.useEffect(() => {
		(async function () {
			try {
				const response = await API.get("classes");

				if (!response.hasOwnProperty("content"))
					throw new Error("Empty response");

				setTable(response.content);
				setLoading(false);
			} catch (err) {
				setError(err.toString());
			}
		})();
	}, []);

	return (
		<Section error={error} loading={loading} title="Classes">
			<Grid>
				{table &&
					table.map(({ fields }, index) => (
						<Card
							onClick={() => history.push(`/class/${fields.id}`)}
							key={`class-${index}`}
						>
							<Card.Body>
								<Title>{fields.Title}</Title>
								<Paragraph>{fields.Year_Group}</Paragraph>
							</Card.Body>
							{fields.hasOwnProperty("Assignment_Title") && (
								<Card.Footer>
									{fields.Assignment_Title.length} active
									assignment
									{fields.Assignment_Title.length !== 1 &&
										"s"}
								</Card.Footer>
							)}
						</Card>
					))}
			</Grid>
		</Section>
	);
};
