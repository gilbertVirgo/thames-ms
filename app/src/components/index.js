import { default as BootstrapCard } from "react-bootstrap/Card";
import styled from "styled-components";
import theme from "../theme";

export const Card = styled(BootstrapCard)`
	margin-bottom: ${theme.gutter}px;
	grid-column: 1 / -1;
	
	${({ onClick }) => onClick && `cursor: pointer;`}

	${theme.breakpoint("sm")`grid-column: span 3`}
	${theme.breakpoint("md")`grid-column: span 4`}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: ${theme.gutter}px;
	row-gap: ${theme.gutter}px;

	${theme.breakpoint("md")`grid-template-columns: repeat(12, 1fr)`}
`;

export const Heading = styled.h1`
	margin-bottom: 25px;
	font-weight: lighter;
`;

const captionStyles = `
	margin-bottom: 10px;
	font-weight: 800;
	text-transform: uppercase;
	font-size: 14px;
`;

export const Caption = styled.h5`
	${captionStyles}
`;
export const TableCaption = styled.th`
	${captionStyles}
`;
