import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  },
  getters: {
    // Getter untuk menghitung jumlah tugas yang belum selesai
    remainingTasks() {
      return this.tasks.filter(task => !task.completed).length
    }
  }
})
