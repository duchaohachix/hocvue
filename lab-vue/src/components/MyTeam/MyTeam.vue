<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3">My Team</p>

        <ul class="list-group" v-for="myTeam in myTeams" :key="myTeam.ID">
          <li class="list-group-item">Name: {{ myTeam.name }}</li>
          <li class="list-group-item">age: {{ myTeam.age }}</li>
          <li class="list-group-item">Postion: {{ myTeam.position }}</li>
          <li class="list-group-item">isValidate: {{ isValidated }}</li>
        </ul>

        <ul class="list-group">
          <li class="list-group-item">
            <span>
              <button @click="randomNumber()">Random number</button>
              {{ number }}</span
            >
          </li>
          <li class="list-group-item">Max: {{ maxOfRandom }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./MyTeam.js">
</script>

<style>
</style>