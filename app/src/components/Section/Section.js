import { Caption, Paragraph } from "..";

import ActivityIndicator from "../ActivityIndicator";
import Alert from "react-bootstrap/Alert";
import React from "react";
import { Wrapper } from "./styles";

export const Section = ({ children, title, error, loading, ...props }) => {
	return !error ? (
		<Wrapper {...props}>
			<Caption>{title}</Caption>
			{loading ? (
				<ActivityIndicator inline>{loading}</ActivityIndicator>
			) : (
				children
			)}
		</Wrapper>
	) : (
		<Alert variant="danger">
			<Caption>Error</Caption>
			<Paragraph>{error}</Paragraph>
		</Alert>
	);
};
