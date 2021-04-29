import React from "react";
import CountDateButton from "../components/CountDateButton";
import ListItem from "../components/ListItem";
import ListHeader from "../components/ListHeader";
import styled from "styled-components";
import Menu from "../components/Menu";

const TasksWrapper = styled.div`
    height: 50vh;
    padding: 0;
    margin: 0;
    position: relative;
    overflow: auto;
`;

const CompletedWrapper = styled.div`
    height: 50vh;
    padding: 0;
    margin: 0;
    position: sticky;
    overflow: auto;
`;

const Padding = styled.div`
    height: 60px;
    width: 100%;
`;

export default () => {
	return (
		<React.Fragment>
            <TasksWrapper>
                <ListHeader title="Tasks">
                <CountDateButton>Count Down</CountDateButton>
                </ListHeader>

                <ListItem
                    title="Math"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem
                    title="Math"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem
                    title="Math"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem
                    title="Math"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem
                    title="Math"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem
                    title="Math"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem reminder
                    title="Bring calculator"
                    date="Mon, 29th Mar"
                ></ListItem>
                
            </TasksWrapper>
            
            <CompletedWrapper>
                <ListHeader 
                    title="Completed"
                    style={{border:"none"}}
                ></ListHeader>

                <ListItem complete
                    title="Assignment 1"
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
                <ListItem checked
                    title="Assignment 1" 
                    date="Mon, 29th Mar"
                ></ListItem>
            </CompletedWrapper>
            <Menu />
		</React.Fragment>
	);
};
