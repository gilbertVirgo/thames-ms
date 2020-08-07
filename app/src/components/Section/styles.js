import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	${({ error }) =>
		error &&
		`
		background-color: ${theme.color.danger}40;
	`}
	
	margin-bottom: ${theme.gutter * 2}px;
`;
