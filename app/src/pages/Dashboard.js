import { Heading, Paragraph } from "../components";

import Assignments from "./sections/Assignments";
import Behaviour from "./sections/Behaviour";
import Classes from "./sections/Classes";
import { Link } from "react-router-dom";
import React from "react";
import Section from "../components/Section";
import Students from "./sections/Students";
import useRole from "../hooks/useRole";

export default () => {
	const [role] = useRole();

	return (
		<React.Fragment>
			{/* <Heading>Dashboard</Heading> */}

			{role.student && (
				<React.Fragment>
					<Assignments />
					{/* <Behaviour /> */}
				</React.Fragment>
			)}
			{role.parent && <Students />}
			{role.staff && (
				<React.Fragment>
					<Classes />
					<Section>
						<Link to="/createAssignment">
							Create new assignment
						</Link>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
