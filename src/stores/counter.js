import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    name: 'Yas',
  }),

  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    },
  },
  actions: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    },
  },
})