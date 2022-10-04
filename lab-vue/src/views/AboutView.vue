<template>
  <div class="about">
    <Infomation name="Duc Hao" :age="20" position="Intern">
      <template v-slot:random-number>
        <div>5</div>
      </template>
    </Infomation>
    <MyTeam />
  </div>
</template>
<script>
import Infomation from "../components/Infomation.vue";
import MyTeam from "../components/MyTeam/MyTeam.vue";
export default {
  components: {
    Infomation,
    MyTeam,
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
