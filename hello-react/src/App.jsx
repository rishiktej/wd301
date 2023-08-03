import { Taskcard2 } from "./TaskCard";
import { Taskcard1 } from "./TaskCard";
function App() {
  return (
    <div>
      <h1>Smater Tasks</h1>
      <h2>Graduation final year Project</h2>
      <div>
        <Taskcard1
          title="to buitd react app"
          dueDate="1st august"
          assigneeName="virat"
        />
      </div>
      <div>
        <Taskcard2
          title="play cricket"
          completedAtDate="2st august"
          assigneeName="gill"
        />
      </div>
    </div>
  );
}

export default App;
