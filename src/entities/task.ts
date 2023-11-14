class Task {
  public id: number
  public title: string
  public description: string
  public completed: boolean

  constructor(id: number, title: string, description: string, completed: boolean) {
    this.id = id
    this.title = title
    this.description = description
    this.completed = completed
  }
}

export default Task
