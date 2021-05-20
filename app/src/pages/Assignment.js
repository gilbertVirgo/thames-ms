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
	const [content, setContent] = React.useState("");
	const [subject, setSubject] = React.useState();


	const translateDate = (date) => {
		return moment(new Date(date)).format("MMM Do YY"); 	
	}

	const translateDatetoWeek = (date) =>{
		return moment(new Date(date)).format('dddd');	
	}

	const [toggle, setToggle] = React.useState(false);
    const SwitchToggle = () => {
        console.log("this is the toggle", toggle);
        setToggle(!toggle)
        // if (toggle==false){
        //     console.log("toggle is on", toggle);

        // }else{
        //     console.log("toggle is off", toggle);
        // }
    }

	const parseHTML = (html) => {
		console.log("html", html);
		return html.replace("<html><head></head><body>", "").replace("</body></html>", "");
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

					let subject = await API.get(`class`);
					setSubject(subject);
					console.log("Subject: ",subject);
					
					setContent(parseHTML($.html()));
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	

	return !loading ? (
		<React.Fragment>
				<TaskHeader  
					image={subject.fields.Class_Icon}  
					subject={record.Class_Name}
					week ={translateDatetoWeek(record.Due)}
					date={translateDate(record.Due)}
					number={record.Expected_Time_Unit}
					time={record.Expected_Time}
            	/>
				<TaskContent 
					loading={loading} error={error}
					onSendForm={()=>SwitchToggle()}> 	
					<div dangerouslySetInnerHTML={{__html: content }} />				
				</TaskContent>
			{role.staff && <ReviewAssignment assignmentId={id} />}
			<Menu />
		</React.Fragment>
	) : "Loading...";
};
