import React from "react";
import "./TaskCard.css";

interface Taskcard1Props {
  title: string;
  dueDate?: string; 
  completedAtDate?: string;// Assuming dueDate is a string representation of the date
  assigneeName: string;
}

const Taskcard=(props:Taskcard1Props)=>{ 
  if (props.dueDate){
    return (
    <div>
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    </div>)}
  else{
    return(
     <div>
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    </div>)}
  }
export default Taskcard;
