import { Card, Grid } from "../components";

import ActivityIndicator from "../components/ActivityIndicator";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();

	const [requestStatus, setRequestStatus] = React.useState(null);
	const [table, setTable] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			const { data, status } = await axios
				.get("http://localhost:8000/api/classes")
				.catch(console.error);

			console.log(data);

			setRequestStatus(status);

			if (data && data.hasOwnProperty("table")) {
				setTable(data.table);
			}
		})();
	}, []);

	const loaded = requestStatus === 200 && table.length;

	return loaded ? (
		<React.Fragment>
			<Grid>
				{table.map(({ fields, id }) => {
					const { Title, Year_Group, Assignment_Title } = fields;

					return (
						<Card onClick={() => history.push(`/class/${id}`)}>
							<Card.Body>
								<h5 style={{ margin: "0 0 5px" }}>{Title}</h5>
								<p style={{ margin: "0 0 5px" }}>
									{Year_Group}
								</p>
							</Card.Body>
							<Card.Footer>
								{Assignment_Title.length} active assignment
								{Assignment_Title.length !== 1 && "s"}
							</Card.Footer>
						</Card>
					);
				})}
			</Grid>
		</React.Fragment>
	) : (
		<ActivityIndicator>Loading classes</ActivityIndicator>
	);
};
