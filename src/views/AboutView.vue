<template>
  <div class="todo-app">
    <h1>Aplikasi Daftar Tugas</h1>
    <input type="text" v-model="newTask.name" @keyup.enter="addTask" placeholder="Tambahkan tugas">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="removeTask(index)">Hapus</button>
        <input type="checkbox" v-model="task.completed">
      </li>
    </ul>
    <p>Tugas yang Tersisa: {{ remainingTasks }}</p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useTodoStore } from '../stores/todoStore'

export default {
  setup() {
    const todoStore = useTodoStore()

    const newTask = reactive({ name: '', completed: false })

    const tasks = todoStore.tasks

    const remainingTasks = computed(() => {
      return tasks.filter(task => !task.completed).length
    })

    const addTask = () => {
      if (newTask.name.trim() !== '') {
        todoStore.addTask({ ...newTask })
        newTask.name = ''
      }
    }

    const removeTask = (index) => {
      todoStore.removeTask(index)
    }

    return {
      tasks,
      newTask,
      remainingTasks,
      addTask,
      removeTask
    }
  }
}
</script>

<style>
body {
  background-color: rgb(55, 161, 231);

}

.todo-app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color:#ffffff;
}

.todo-app h1 {
  color: #333;
}

.todo-app input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.todo-app ul {
  list-style-type: none;
  padding: 0;
}

.todo-app li {
  margin-bottom: 10px; 
  padding: 10px;
  display: flex;
  align-items: center;
}

.todo-app li button {
  margin-left: 10px;
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.todo-app li input[type="checkbox"] {
  margin-right: 10px;
}

.todo-app p {
  margin-top: 20px;
  font-size: 14px;
  color: #ffffff;
}

.todo-app .completed {
  text-decoration: line-through;
  color: #ffffff;
}
</style>
