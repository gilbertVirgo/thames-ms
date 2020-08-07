import { BrowserRouter, Route, Switch } from "react-router-dom";

import Assignment from "./pages/Assignment";
import Class from "./pages/Class";
import Container from "react-bootstrap/Container";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import React from "react";
import Student from "./pages/Student";
import useRole from "./hooks/useRole";

const App = () => {
	const [role] = useRole();

	return (
		<BrowserRouter>
			<Nav />

			<Container>
				<Switch>
					<Route exact path="/" component={Dashboard} />

					{role.staff && (
						<Route path="/class/:id" component={Class} />
					)}
					{!role.none && (
						<Route path="/assignment/:id" component={Assignment} />
					)}
					{!role.none && (
						<Route path="/student/:id" component={Student} />
					)}

					<Route path="/login" component={Login} />
					<Route component={NotFound} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
