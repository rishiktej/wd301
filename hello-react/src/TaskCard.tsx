import React from "react";
import "./TaskCard.css";

interface Taskcard1Props {
  title: string;
  dueDate: string; // Assuming dueDate is a string representation of the date
  assigneeName: string;
}

interface Taskcard2Props {
  title: string;
  completedAtDate: string; // Assuming completedAtDate is a string representation of the date
  assigneeName: string;
}

const Taskcard1=(props:Taskcard1Props)=>{ 
  return (
    <div>
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    </div>
  );}

 

const Taskcard2=(props:Taskcard2Props)=>{ return (
    <div >
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    </div>
  );}

 


export { Taskcard1, Taskcard2 };
