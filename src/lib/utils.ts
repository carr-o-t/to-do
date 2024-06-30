import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Main } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortByPriority(tasks: Main.Task[]) {
  if (tasks) {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const sortedArray = tasks
      .slice()
      ?.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    return sortedArray;
  }
  return [];
}
