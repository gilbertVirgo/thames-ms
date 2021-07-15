import React from 'react'



class AchievementForm extends React.Component {
	constructor({ selected, onSave }) {
		this.state = {
			originName: selected.Name
			originDescription: selected.Description
			originRole: selected.Role
			originDate: selected.Date
			originType: selected.Type
			originAttachment: selected.Attachment
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<form>
				<h1> Name </h1>
				<input
					name="Name"
					type="text"
					value={this.state.originName}
					onChange={this.handleInputChange} />
				<h2> Details </h2>
				<label>
					Date:
					<input
						name="Date"
						type="date"
						value={this.state.originDate}
						onChange{this.handleInputChange} />
				</label>
				<label>
					Role:
					<select
						name="Role"
						value={this.state.originRole}
						onChange={this.handleInputChange} >
						<option value="Creator">Creator</option>
						<option value="Organiser">Organiser</option>
						<option value="Participant">Participant</option>
						<option value="Team Leader">Team Leader</option>
						<option value="Volunteer">Volunteer"</option>
						<option value="Other">Other</option>
					</select>
				</label>
				<label>
					Type:
					<select
						name="Type"
						value={this.state.originRole}
						onChange={this.handleInputChange} >
						<option value="Competition">Competition</option>
						<option value="Leardership">Leadership</option>
						<option value="Masterclass">Masterclass</option>
						<option value="Online Course">Online Course</option>
						<option value="Personal Project">Personal Project</option>
						<option value="Reading">Reading</option>
						<option value="Work experience">Work experience</option>
						<option value="Other">Other</option>
					</select>
				</label>
			</form>
		)
	}

}

export default AchivementForm
