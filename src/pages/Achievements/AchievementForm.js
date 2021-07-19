import React, { Component } from 'react';
import Select from 'react-select';
import { ModalForm } from './styles';

export default class extends Component {
  constructor({ selected, onSave }) {
    super();
    this.state = { ...selected };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSave = onSave;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <ModalForm>
        <h1>
          {this.state.Name.length > 32
            ? this.state.Name.slice(0, 32) + '...'
            : this.state.Name}
        </h1>
        <input
          name="Name"
          placeholder="Name..."
          onChange={this.handleInputChange}
        />

        <Select
					name="Type"
          placeholder="Type..."
					onChange={({ value }) => this.setState({ Type: value })}
          options={[
            { value: 'Competition', label: 'Competition' },
            { value: 'Masterclass', label: 'Masterclass' },
            { value: 'Online course', label: 'Online course' },
            { value: 'Personal project', label: 'Personal project' },
            { value: 'Reading', label: 'Reading' },
            { value: 'Work experience', label: 'Work experience' },
            { value: 'Other', label: 'Other' },
          ]}
        />

				<Select
					name="Associations"
					isMulti
          placeholder="Subjects..."
					onChange={(values) => this.setState({ Associations: values.map(({ value }) => value) })}
          options={[
            { value: 'Art', label: 'Art' },
            { value: 'Biology', label: 'Biology' },
            { value: 'Business studies', label: 'Business studies' },
            { value: 'Chemistry', label: 'Chemistry' },
            { value: 'Computer science', label: 'Computer science' },
            { value: 'French', label: 'French' },
            { value: 'Geogrpahy', label: 'Geogrpahy' },
            { value: 'Graphics', label: 'Graphics' },
            { value: 'History', label: 'History' },
            { value: 'Maths', label: 'Maths' },
            { value: 'Physics', label: 'Physics' },
            { value: 'Spanish', label: 'Spanish' },
            { value: 'Sport', label: 'Sport' },
            { value: 'Other', label: 'Other' },
          ]}
        />

        <input
          name="Date"
          type="date"
          placeholder="Date..."
          value={this.state.Date}
          onChange={this.handleInputChange}
        />

        <textarea
          placeholder="Description..."
          rows="6"
          name="Description"
          type="text"
          value={this.state.Description}
          onChange={this.handleInputChange}
        />

        <textarea
          placeholder="References..."
          name="References"
          type="text"
          value={this.state.References}
          onChange={this.handleInputChange}
        />

        <br />
        <button onClick={() => this.onSave(this.state)}>Done</button>
      </ModalForm>
    );
  }
}
