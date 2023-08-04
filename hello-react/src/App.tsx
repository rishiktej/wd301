import React from "react";
import Taskcard from "./TaskCard";

function App() {
  return (
    <>
      <div className="mx-12 my-6">
        <h1 className="text-2xl font-bold my-4 mx-25">Smarter Tasks</h1>
        <p className="font-bold text-sm mx-25 mb-3">
          Project: Graduation FInal Year Project (Revamp College Website)
        </p>
        <div className="flex justify-center">
          <div className="flex-1 w-36 px-10 border-2 rounded-xl border-grey-900 p-5 ml-32">
            <h1 className="text-2xl font-bold text-center pb-5">pending</h1>
            <Taskcard
              title="Build the website with static content"
              dueDate="10th April"
              assigneeName="Saketh"
            />
            <button className="bg-gray-200 px-5 rounded-md">+ New Task</button>
          </div>

          <div className="flex-1 w-36 px-10 border-2 rounded-xl border-grey-900 p-5 ml-14 mr-32">
            <h1 className="text-2xl font-bold bold text-center pb-5">done</h1>
            <Taskcard
              title="Play cricket"
              completedAtDate="10th July"
              assigneeName="Rohit S"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;