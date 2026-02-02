<script setup>
import { useCounterStore } from '@/stores/auth'

const counter = useCounterStore()

// you can access:
// counter.count
// counter.doubleCount
// counter.increment()
</script>

<template>
  <div>
    <h2>Count: {{ counter.count }}</h2>
    <h3>Double: {{ counter.doubleCount }}</h3>

    <button @click="counter.increment">
      Increment
    </button>
  </div>
</template>
