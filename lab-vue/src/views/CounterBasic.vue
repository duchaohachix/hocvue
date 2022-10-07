<template>
  <p>inputText: {{ inputNumber }}</p>
  <Counter :initialValue="inputNumber" @counter-update="inputNumber = $event" />
</template>

<script>
import Counter from "../components/Counter/Counter.vue";
export default {
  components: { Counter },
  data() {
    return {
      inputNumber: 5,
    };
  },
};
</script>

<style>
</style>