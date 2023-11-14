import Task from '@/entities/task'

class TaskManager {
  createTask(title: string, description: string) {
    const task = new Task(Math.random(), title, description, false)
    // Save the task to a database or a data store
    return task
  }

  // Other use cases like updateTask, deleteTask, and getTasks can be defined here.
}

export default TaskManager
