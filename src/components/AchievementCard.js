import { Grid } from "./index";
import React from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


//Styles for the button to wrap the card

const AchieveCardWrapper = styled.button`
	border-radius: 5px;
	border = 1px;
`

class AchievementCard extends React.Component {
  constructor(props) {
    super();
    this.props = props
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <AchieveCardWrapper onClick={this.handleOpenModal}> {this.props.achievement.Name} </AchieveCardWrapper>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
		<h1> {this.props.achievement.Name} </h1>
		<p> {this.props.achievement.Description} </p>
		<button onClick={this.handleCloseModal}>X</button>
        </Modal>
      </div>
    );
  }
}

export default AchievementCard;
