import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { sortByPriority } from "../lib/utils";
import { RootState } from "../redux/store";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className="p-4">
      {sortByPriority(tasks)?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
