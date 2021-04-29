import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import TaskContent from "../components/TaskContent";

export default () => {
	return (
		<React.Fragment>
            <TaskContent />
            <Menu />
		</React.Fragment>
	);
};
