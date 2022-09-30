<template>
  <div class="counter">
    <h1>This is an counter page</h1>
    <Counter/>
    <div class="buttons">
      <button @click="storeCounter.increaseCount">+</button>
      <button @click="storeCounter.decreaseCount">-</button>

    </div>
    <hr>
    <div>
      This counter is: {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit counter:</h3>
      <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import Counter from '@/components/Counter.vue'

const storeCounter = useCounterStore()

</script>
<style lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  &__value {
    font-size: 40px;
  }
}

.buttons button {
  font-size: 40px;
  margin: 10px;
  width: 80px;
}
</style>
