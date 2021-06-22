import React from "react";
import styled, {keyframes} from "styled-components";
import {ProfileSectionTitle, ProfileSectionContent} from "../components/Text"
import Rating from "@material-ui/lab/Rating";


const Wrapper = styled.div`
	width: 100%;
    height: 100%;
	margin: 0 auto;
    padding: 19px 30px 115px 30px;

    background: #E6EEE1;    
`;

const FeedbackWrapper = styled.div`
    margin: 0;

    ${ProfileSectionTitle}{
        margin-bottom: 3px;
    }

    ${({ waiting }) =>
		waiting &&
		`
            display: none;
    `}
`;

const TaskStatus = styled.h6`
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;

    color: #002E5D;
    margin: 0;
    padding: 0;

    ${({ handed }) =>
		handed &&
		`
        color: #EAAA00;  
    `}

    ${({ resubmit }) =>
		resubmit &&
		`
        color: #CE0F69; 
    `}
`;

const StatusWrapper = styled.div`
    margin: 0;
    margin-top: 19px;
    display: grid;
    grid-template-columns: 84px auto;
    row-gap: 0;
    column-gap: 10px;
    justify-items: flex-end;

    ${ProfileSectionTitle}{
        justify-self: flex-start;
    }

    ${({ waiting }) =>
		waiting &&
		`
        display: none;
    `}
`;


const StudentViewFeedback = ({ ...props }) => {
    const [status, setStatus] = React.useState("Pending");
    const [waiting, setWaiting] = React.useState(false);


    React.useEffect(() => {
		(async function () {
			setStatus(status);
            setWaiting(false);
		})();
	}, []);

	return (
		<Wrapper {...props}>
            <FeedbackWrapper waiting={waiting}>
                <ProfileSectionTitle>Feedback</ProfileSectionTitle>
                <ProfileSectionContent>
                    Dignissim tincidunt consequat magna lectus vel tincidunt. Faucibus tristique adipiscing non vel tellus lectus. Sed nisl at eu sit odio et nulla. Et in volutpat vestibulum consectetur et et id felis. Ut in amet urna suscipit elit ut sed nulla. 
                </ProfileSectionContent>
            </FeedbackWrapper>
            <StatusWrapper>
                <ProfileSectionTitle>Task status:</ProfileSectionTitle>
                <TaskStatus resubmit>{status}</TaskStatus>
            </StatusWrapper>
            <StatusWrapper waiting={waiting}>
                <ProfileSectionTitle>Effort</ProfileSectionTitle>
                <Rating
					value="4"
					defaultValue={0}
				/>
            </StatusWrapper>
            
		</Wrapper>
	);
};

export default StudentViewFeedback;