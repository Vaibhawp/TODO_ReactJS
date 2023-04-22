import React, { Component } from "react";
import "./CreateTask.css";
export default class CreateTask extends Component {
	constructor(props) {
		super(props);
		this.state = { task: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ task: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.createTask(this.state.task);
		this.setState({ task: "" });
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button className="add" type="submit">
					Add Task
				</button>
			</form>
		);
	}
}
