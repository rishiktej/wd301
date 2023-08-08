import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
 todoTitle: string;
  todoDueDate:string;
  todoDescription:string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    inputRef = React.createRef<HTMLInputElement>();
   constructor(props: TaskFormProps) {
    super(props);
    this.state = {
     todoTitle: "",
      todoDueDate : "",
      todoDescription:""
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const newTask = {
   todoTitle: this.state.todoTitle,
    todoDueDate:this.state.todoDueDate,
    todoDescription:this.state.todoDescription,
  };
  this.props.addTask(newTask);
  this.setState({todoTitle: "" });
  this.setState({todoDueDate:""})
  this.setState({todoDescription:""})
};
titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({todoTitle: event.target.value });
};
duedateChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ todoDueDate: event.target.value });
};
descriptionChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ todoDescription: event.target.value });
};
   render(){
    return (
      <form onSubmit={this.addTask}>
        <input required placeholder="Title" id="todoTitle" type="text" value={this.state.todoTitle} onChange={this.titleChanged}/><br></br>
        <input required placeholder="DueDate" id="todoDueDate" type="text" value={this.state.todoDueDate} onChange={this.duedateChanged}/><br></br>
        <input placeholder="todoDescription" id="todoDescription" type="text" value={this.state.todoDescription} onChange={this.descriptionChanged}/><br></br>
        <button type="submit" id="addTaskButton">Add item</button>
      </form>
    )
  }
  
}
 export default TaskForm;