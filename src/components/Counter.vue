<template>
  <div class="counter__value">
    {{ storeCounter.count }}
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

</script>