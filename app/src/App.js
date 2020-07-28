import { BrowserRouter, Redirect, Route } from "react-router-dom";

import Class from "./pages/Class";
import Classes from "./pages/Classes";
import Container from "react-bootstrap/Container";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import React from "react";

const App = () => {
	const [auth, setAuth] = React.useState(true);

	return (
		<BrowserRouter>
			<Nav />

			<Container>
				<Route path="/class/:id" component={Class} />
				<Route path="/classes" component={Classes} />

				<Route path="/login" component={Login} />

				{!auth && <Redirect from="*" to="/login" />}
			</Container>
		</BrowserRouter>
	);
};

export default App;
