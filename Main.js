import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./Main.css";
export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: [] };
		this.createTask = this.createTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.toggleTask = this.toggleTask.bind(this);
	}
	toggleTask(index) {
		let arr = [...this.state.tasks];
		arr[index].isCompleted = !arr[index].isCompleted;
		this.setState({ tasks: arr });
	}
	createTask(task) {
		if (task.trim() === "") {
			alert("Task cannot be empty");
			return;
		}
		let allTasks, newTask;
		newTask = { taskName: task.trim(), isCompleted: false };
		allTasks = [...this.state.tasks, newTask];
		this.setState({ tasks: allTasks });
	}
	editTask(index, taskName) {
		let arr = [...this.state.tasks];
		arr[index].taskName = taskName;
		this.setState({ tasks: arr });
	}
	deleteTask(index) {
		let allTasks = this.state.tasks.filter((t, i) => i !== index);
		this.setState({ tasks: allTasks });
	}
	render() {
		return (
			<div className="Main">
				<h1>Todo List</h1>
				<div className="content">
					<CreateTask createTask={this.createTask} />
					<br />
					<TaskList
						tasks={this.state.tasks}
						deleteTask={this.deleteTask}
						editTask={this.editTask}
						toggleTask={this.toggleTask}
					/>
				</div>
			</div>
		);
	}
}
