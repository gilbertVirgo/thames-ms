import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
	TableCaption,
} from "../components";

import API from "../api";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
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
					const response = await API.get(`assignment/${id}`);

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
					<Header
						heading={record.Title}
						subheading={record.Class_Name}
					/>
					<Paragraph>{record.Content}</Paragraph>
				</React.Fragment>
			)}
		</Section>
	);
};
