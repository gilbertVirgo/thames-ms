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

const TemporaryModalStyle = styled.div`
  
`


function ModalContent({ achievement }) {

  return (
    <>
      <h1>{ achievement.Name }- { achievement.Type }</h1>
      <h3>Details</h3>
      <ul>
	<li>Role: { achievement.Role }</li>
	<li>Subjects: { achievement.Associations.join(', ') }</li>
      </ul>
      <h3>Description</h3>
      <p>{ achievement.Description }</p>
    </>
  )
}

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

  handleDelete() {
    // todo
  }

  render() {
    return (
      <TemporaryModalStyle>
        <AchieveCardWrapper onClick={this.handleOpenModal}> {this.props.achievement.Name} </AchieveCardWrapper>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
		<ModalContent achievement={this.props.achievement}/>
		<button onClick={this.handleCloseModal}>X</button>
		<button onClick={this.handleDelete}>Delete</button>
        </Modal>
      </TemporaryModalStyle>
    );
  }
}

export default AchievementCard;
