import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../src/models/taskCard", () => ({
  default: vi.fn(),
}));

let tasks;

beforeEach(async () => {
  vi.resetModules();

  const storage = new Map();

  vi.stubGlobal("localStorage", {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, String(value)),
  });

  const module = await import("../src/storage/taskStorage.js");
  tasks = module.default;
});

describe("Task storage", () => {
  it("should mark a task as completed", () => {
    tasks.updateTasks([{ title: "Study JavaScript", isDone: false }]);

    tasks.changeIsDone(0);

    expect(tasks.getAllTasks()[0].isDone).toBe(true);
  });

  it("should mark a completed task as incomplete", () => {
    tasks.updateTasks([{ title: "Study JavaScript", isDone: true }]);

    tasks.changeIsDone(0);

    expect(tasks.getAllTasks()[0].isDone).toBe(false);
  });

  it("should delete a task and update the remaining task IDs", () => {
    tasks.updateTasks([
      { title: "Task 1", isDone: false },
      { title: "Task 2", isDone: false },
      { title: "Task 3", isDone: false },
    ]);

    tasks.removeTask(1);

    const remainingTasks = tasks.getAllTasks();

    expect(remainingTasks).toHaveLength(2);
    expect(remainingTasks[0].title).toBe("Task 1");
    expect(remainingTasks[1].title).toBe("Task 3");
    expect(remainingTasks[0].id).toBe(0);
    expect(remainingTasks[1].id).toBe(1);
  });
});
