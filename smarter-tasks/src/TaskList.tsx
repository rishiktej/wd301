import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  removeTask: (taskId: string) => void;
}
const TaskList = (props: Props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>
          <Task
            id={task.id}
            todoTitle={task.todoTitle}
            todoDescription={task.todoDescription}
            todoDueDate={task.todoDueDate}
            removeTask={props.removeTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
