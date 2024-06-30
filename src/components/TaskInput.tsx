import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/taskSlice";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TaskInput: React.FC = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: uuidv4(), title: task, priority: "medium" }));
      setTask("");
    }
  };

  return (
    <div className="flex items-center p-4">
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Conquer the dragon of overdue emails 🐉"
      />
      <Button onClick={handleAddTask} className="ml-2 ">
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
