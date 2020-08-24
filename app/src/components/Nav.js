import Button from "react-bootstrap/Button";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import theme from "../theme";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();

	return (
		<Navbar
			bg="light"
			expand="lg"
			style={{ marginBottom: theme.gutter + "px" }}
		>
			<Home
				style={{ width: "30px", height: "30px" }}
				onClick={() => history.push("/")}
			/>
			{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
			</Navbar.Collapse> */}
			{/* <div style={{ margin: "0 auto" }}>
				<Home
					style={{ width: "30px", height: "30px", "margin-right":"60px" }}
				/>
			</div> */}
		</Navbar>
	);
};
