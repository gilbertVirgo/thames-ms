import { Heading, Subheading } from "..";

import React from "react";
import Section from "../Section";
import { Wrapper } from "./styles";
import theme from "../../theme";

export const Header = ({ heading, subheading, ...props }) => {
	return (
		<Section {...props}>
			<Heading style={{ marginBottom: "0px" }}>{heading}</Heading>
			<Subheading style={{ marginBottom: `${theme.gutter * 3}px` }}>
				{subheading}
			</Subheading>
		</Section>
	);
};
