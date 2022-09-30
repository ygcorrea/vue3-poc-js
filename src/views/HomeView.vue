<template>
  <div class="home">
    <h1>Home</h1>
    <small>When do you change here, changes in counter Example too and vice-versa</small>
    <button @click="storeCounter.increaseCount" class="counter-button">
      {{storeCounter.count}}
    </button>

  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';

const storeCounter = useCounterStore()

</script>
<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
}

.counter-button {
  font-size: 40px;
  background-color: rgb(34, 238, 194);
  width: 100%;
  cursor: pointer;
}
</style>
