<!-- TaskList.vue -->
<template>
  <div>
    <button @click="createTask">Create Task</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskManager from '../useCases/TaskManager'

function createTask() {
  const taskManager = new TaskManager()
  const newTask = taskManager.createTask('New Task', 'Description')
  console.log(newTask)
  // Display the task in the UI
}
</script>
