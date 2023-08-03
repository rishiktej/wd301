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

const Taskcard1: React.FC<Taskcard1Props> = (props) => {
  const { title, dueDate, assigneeName } = props;

  return (
    <div>
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>Due on: {dueDate}</p>
        <p>Assignee: {assigneeName}</p>
      </div>
    </div>
  );
};

const Taskcard2: React.FC<Taskcard2Props> = (props) => {
  const { title, completedAtDate, assigneeName } = props;

  return (
    <div >
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>Completed on: {completedAtDate}</p>
        <p>Assignee: {assigneeName}</p>
      </div>
    </div>
  );
};

export { Taskcard1, Taskcard2 };
