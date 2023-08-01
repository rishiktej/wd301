/* eslint-disable react/prop-types */
import "./TaskCard.css";

const Taskcard1 = (props) => {
  return (
    <div className="bodyItem">
      <h1>Pending</h1>
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on:{props.dueDate} </p>
        <p>Assignee:{props.assigneeName}</p>
      </div>
    </div>
  );
};

const Taskcard2 = (props) => {
  return (
    <div className="bodyItem2">
      <h1>Done</h1>
      <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Completed on:{props.completedAtDate} </p>
        <p>Assignee:{props.assigneeName}</p>
      </div>
    </div>
  );
};

export { Taskcard1, Taskcard2 };
