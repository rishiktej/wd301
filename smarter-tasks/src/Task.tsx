import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  taskListLength: number;
  removeTask: (task: TaskItem) => void;
}
const Task = (props: TaskProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { item, removeTask, taskListLength } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${String(taskListLength + 1) || ""}`}>
            <h2 className="text-base font-bold my-1">{item.todoTitle}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.todoDueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.todoDescription}
          </p>
        </div>

        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(item)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
