import API from "../api";
import React from "react";
import ReviewAssignment from "./sections/ReviewAssignment";
import { useParams } from "react-router-dom";
import useRole from "../hooks/useRole";
import moment from "moment";

import Menu from "../components/Menu";
import TaskContent from "../components/TaskContent";
import TaskHeader from "../components/TaskHeader";
import cheerio from "cheerio";

export default () => {
	const [role] = useRole();

	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState("Loading assignment data...");
	const [error, setError] = React.useState();
	const [$, set$] = React.useState();

	const translateDate = (date) => {
		return moment(new Date(date)).format("MMM Do YY"); 	
	}

	const translateDatetoWeek = (date) =>{
		return moment(new Date(date)).format('dddd');	
	}
	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`assignment/${id}`);

					if (!response.hasOwnProperty("content"))
						throw new Error("Empty response");

					const record = response.content[0].fields;
					const $ = cheerio.load(record.Content);

					$("a").prepend(`<img src='${require("../assets/icons/paperclip.svg")}' />`);
					setRecord(record);
					
					set$($);
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return (
		<React.Fragment>
			{record && (
				<TaskHeader    
                subject={record.Title}
                week ={translateDatetoWeek(record.Due)}
                date={translateDate(record.Due)}
                number="20-40"
                time="Minutes"
            />
			)}
			{record && $ && (
				<TaskContent loading={loading} error={error}> 	
					<div dangerouslySetInnerHTML={{__html: $.html()}} />				
				</TaskContent>
			)}
			{record && role.staff && <ReviewAssignment assignmentId={id} />}
			<Menu />
		</React.Fragment>
	);
};
