import { Heading, Subheading } from "..";

import React from "react";
import { Wrapper } from "./styles";
import theme from "../../theme";

export const Header = ({ heading, subheading, ...props }) => {
	return (
		<Wrapper {...props}>
			<Heading style={{ marginBottom: "10px" }}>{heading}</Heading>
			<Subheading style={{ marginBottom: `${theme.gutter * 3}px` }}>
				{subheading}
			</Subheading>
			<hr />
		</Wrapper>
	);
};
