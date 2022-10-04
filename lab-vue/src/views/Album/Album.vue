<template>
  <h3>Album</h3>
  <div v-for="album in albums" :key="album.id">
    <ImageCard :url="album.url" :title="album.title" />
  </div>
</template>

<script src="./Album.js">
</script>

<style>
</style>