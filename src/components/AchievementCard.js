import { Grid } from "./index";
import React from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import API from '../api'
import Modal from 'react-modal';


//Styles for the button to wrap the card

const AchieveCardWrapper = styled.button`
	border-radius: 5px;
	font-family: "Nunito Sans", sans-serif;
	padding: 2rem;
	margin: 1rem 0;
	background: white;
	border: none;
	box-shadow: 2px 3px 21px #bbb;
	width: 100%;
	text-align: inherit;
`


const AchieveButton = styled.button`
	border-radius: 5px;
	font-family: "Nunito Sans", sans-serif;
	margin: 1rem 0;
	background: grey;
	border: 1px;
	box-shadow: 1px 1px1 0px #bbb;
	text-align: inherit;
`


function ModalContent({ achievement }) {

  return (
    <>
      <h1>{ achievement.Name }</h1>
      <h3>Details</h3>
      <ul>
	<li>Type: { achievement.Type }</li>
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
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  async handleDelete() {
    await API.delete(`achievement/${ this.props.achievement.id }`)
    this.setState({ showModal: false });
    window.location.reload(false);
  }

  render() {
    return (
      <>
        <AchieveCardWrapper onClick={this.handleOpenModal}>
	  <h4>{this.props.achievement.Name}</h4>
	  <p>
	    <b>{ this.props.achievement.Type }</b> ({this.props.achievement.Role})
	  </p>
	</AchieveCardWrapper>
        
	<Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
		<AchieveButton onClick={this.handleCloseModal}>Close</AchieveButton>
		<ModalContent achievement={this.props.achievement}/>
		<AchieveButton onClick={this.handleDelete}>Delete</AchieveButton>
        </Modal>
      </>
    );
  }
}

export default AchievementCard;
