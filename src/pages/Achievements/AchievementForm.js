import React, { Component } from 'react'
import { ModalForm } from './styles'


export default class extends Component {
	constructor({ selected, onSave }) {
		super()
		this.state = { ...selected }
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSave = onSave
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value })
	}

	render() {
		return (
			<ModalForm>
				<h2> Edit {this.state.Name} </h2>
				<h5>Details</h5>
				
				<input
					name="Name"
					type="text"
					value={this.state.Name}
					onChange={this.handleInputChange} />
					<input
						name="Date"
						type="date"
						value={this.state.Date}
						onChange={this.handleInputChange} />
					<select
						name="Type"
						value={this.state.Type}
						onChange={this.handleInputChange}>
						<option value="Competition">Competition</option>
						<option value="Masterclass">Masterclass</option>
						<option value="Online course">Online Course</option>
						<option value="Personal project">Personal Project</option>
						<option value="Reading">Reading</option>
						<option value="Work experience">Work experience</option>
						<option value="Other">Other</option>
					</select>

				<h5>About</h5>
				<textarea
					rows='6'
					name="Description"
					type="text"
					value={this.state.Description}
					onChange={this.handleInputChange} />

				<h5>References</h5>
				<textarea
				  name="References"
				  type="text"
				  value={this.state.References}
				  onChange={this.handleInputChange}
				/>

				<br/>
				<button onClick={() => this.onSave(this.state)}>Done</button>
			</ModalForm>
		)
	}

}
