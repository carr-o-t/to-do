import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/features/tasks/taskSlice";
import { Main } from "../types";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Icons } from "./Icons";

interface TaskItemProps {
  task: Main.Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [priority, setPriority] = useState<"high" | "medium" | "low">(
    task.priority
  );
  const dispatch = useDispatch();

  const handleUpdateTask = useCallback(
    (value: "high" | "medium" | "low") => {
      if (task.priority !== value) {
        dispatch(updateTask({ ...task, priority: value }));
      }
    },
    [dispatch, task]
  );

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className="flex items-center p-2 border-b">
      <span className="flex-grow">{task.title}</span>
      <Select
        value={priority}
        onValueChange={(value: "high" | "medium" | "low") => {
          setPriority(value);
          handleUpdateTask(value);
        }}
      >
        <SelectTrigger className="w-[120px] mr-3">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>
      <Button variant={"destructive"} onClick={handleDelete} className="p-2 ">
        <Icons.trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TaskItem;
