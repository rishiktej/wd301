interface TaskProps {
  id: string; // Add the id prop
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
  removeTask: (taskId: string) => void;
}

const Task = (props: TaskProps) => {
  const { id, todoTitle, todoDescription, todoDueDate, removeTask } = props;

  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${id}`}>
            <h2 className="text-base font-bold my-1">{todoTitle}</h2>
          </a>
          <p className="text-sm text-slate-500">{todoDueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {todoDescription}
          </p>
        </div>

        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(id)} // Pass the id to removeTask
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
