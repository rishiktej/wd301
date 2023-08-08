import React from "react";

interface TaskProp {
  todoTitle: string;
  todoDueDate:string;
  todoDescription:string;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.todoTitle}</h2>
        <p className="text-sm text-slate-500">
          Due Date:{this.props.todoDueDate}
        </p>
        <p className="text-sm text-slate-500">
          Description: {this.props.todoDescription}
        </p>
      </div>
    );
  }
}
export default Task;