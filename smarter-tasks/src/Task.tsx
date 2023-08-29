interface TaskProp {
  id: number;
  todoTitle: string;
  todoDueDate: string;
  todoDescription: string;
  removeTask: (taskId: number) => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
      <p className="text-sm text-slate-500">{props.todoDueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.todoDescription}
      </p>
      <button
        className="deleteTaskButton"
        onClick={() => props.removeTask(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
