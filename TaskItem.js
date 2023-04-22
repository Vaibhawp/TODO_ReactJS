import React, { Component } from "react";
import "./TaskItem.css";
export default class TaskItem extends Component {
	constructor(props) {
		super(props);
		this.deleteTask = this.deleteTask.bind(this);
		this.state = { taskName: this.props.taskItem.taskName, isEditing: false };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleTask = this.toggleTask.bind(this);
		this.setBack = this.setBack.bind(this);
	}
	toggleTask(e) {
		this.props.toggleTask(this.props.id);
	}
	deleteTask(e) {
		this.props.deleteTask(this.props.id);
	}
	setIsEditing(editing) {
		this.setState({ isEditing: editing });
	}
	setBack() {
		this.setState({ taskName: this.props.taskItem.taskName, isEditing: false });
	}
	handleChange(event) {
		this.setState({ taskName: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.editTask(this.props.id, this.state.taskName);
		this.setIsEditing(false);
	}
	render() {
		let result;
		if (this.state.isEditing === true) {
			result = (
				<tr>
					<td colSpan="2">
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								value={this.state.taskName}
								onChange={this.handleChange}
							/>
							<span style={{ float: "right" }}>
								<button className="save task" type="submit">
									Save
								</button>
								<button className="back task" onClick={this.setBack}>
									Back
								</button>
							</span>
						</form>
					</td>
				</tr>
			);
		} else {
			result = (
				<tr>
					<td onClick={this.toggleTask} className="task">
						<input type="checkbox" readOnly />
						<span
							className={
								this.props.taskItem.isCompleted ? "completed" : "not-completed"
							}
						>
							{this.props.taskItem.taskName}
						</span>
					</td>
					<td className="Actions">
						<button
							className="edit task"
							onClick={() => this.setIsEditing(true)}
						>
							Edit
						</button>
						<button className="delete task" onClick={this.deleteTask}>
							Delete
						</button>
					</td>
				</tr>
			);
		}
		return result;
	}
}
