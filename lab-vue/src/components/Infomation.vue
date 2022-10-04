<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3">Thông tin</p>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ name }}</li>
          <li class="list-group-item">age: {{ age }}</li>
          <li class="list-group-item">Postion: {{ position }}</li>
          <li class="mb-2">
            <slot name="random-number" />
          </li>
        </ul>
      </div>
      <div class="col">
        <input type="text" v-model="inputText" />
        <p>inputText: {{ inputText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Infomation",
  data() {
    return {
      inputText: "Example",
    };
  },
  props: {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    position: { type: String, require: true },
  },
};
</script>

<style>
</style>