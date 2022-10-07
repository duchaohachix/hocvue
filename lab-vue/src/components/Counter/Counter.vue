<template>
  <div>
    <h2>Counter Options API</h2>
    <p>Count: {{ count }}</p>
    <p>2^Count: {{ countPow }}</p>
    <button @click="increment()">Increase Count</button>
    <button @click="incrementBy(5)">Increase Count by 5</button>
    <button @click="decrement()">Decrease Count</button>
  </div>
</template>

<script src="./Counter.js">
</script>

<style>
</style>