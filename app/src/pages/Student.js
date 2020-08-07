import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
	TableCaption,
	Title,
} from "../components";

import API from "../api";
import Assignments from "./sections/Assignments";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import React from "react";
import Section from "../components/Section";
import theme from "../theme";
import { useParams } from "react-router-dom";

export default () => {
	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState();

	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`student/${id}`);

					if (!response.hasOwnProperty("content"))
						throw new Error("Empty response");

					setRecord(response.content[0].fields);
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return (
		<Section loading={loading} error={error}>
			{record && (
				<React.Fragment>
					<Heading style={{ marginBottom: "10px" }}>
						{record.Surname}, {record.Forename}
					</Heading>
					<Subheading
						style={{ marginBottom: `${theme.gutter * 3}px` }}
					>
						{record.Year_Group}
					</Subheading>
					<hr />
					<Section title="Behaviour">
						<Badge variant="success">● {record.Green_Points}</Badge>{" "}
						<Badge variant="danger">● {record.Red_Points}</Badge>
					</Section>
					<Assignments />
				</React.Fragment>
			)}
		</Section>
	);
};
