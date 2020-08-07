import { Heading, Paragraph } from "../components";

import Assignments from "./sections/Assignments";
import Classes from "./sections/Classes";
import React from "react";
import Students from "./sections/Students";
import useRole from "../hooks/useRole";

export default () => {
	const [role] = useRole();

	return (
		<React.Fragment>
			<Heading>Dashboard</Heading>

			{role.student && <Assignments />}
			{role.parent && <Students />}
			{role.staff && <Classes />}
		</React.Fragment>
	);
};
