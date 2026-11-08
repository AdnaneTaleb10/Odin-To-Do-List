import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock dependencies
vi.mock("../src/controllers/general.js", () => ({
  updateIds: vi.fn(),
}));

vi.mock("../src/models/projects.js", () => ({
  projects: [],
}));

vi.mock("../src/storage/taskStorage.js", () => ({
  default: {
    storeTask: vi.fn(),
  },
}));

import { Task } from "../src/models/tasks.js";
import tasks from "../src/storage/taskStorage.js";

describe("Task model", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should create a task with the correct properties", () => {
    // Arrange
    const title = "Study JavaScript";
    const project = "Personal";
    const priority = "HIGH";
    const dueDate = "2026-11-10";
    const notes = "Revise functions";

    // Act
    const task = new Task(title, project, priority, dueDate, notes);

    // Assert
    expect(task.title).toBe(title);
    expect(task.project).toBe(project);
    expect(task.priority).toBe("high");
    expect(task.dueDate).toBe(dueDate);
    expect(task.notes).toBe(notes);
    expect(task.isDone).toBe(false);

    // Verify that the task was sent to storage
    expect(tasks.storeTask).toHaveBeenCalledOnce();
    expect(tasks.storeTask).toHaveBeenCalledWith(task);
  });
});
