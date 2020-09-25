<template>
  <div class="bg">
    <div>
      <navigation></navigation>
    </div>
    <div class="banner">
      <banner></banner>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/Banner/Banner.vue'
  import Nav from '../components/Nav.vue'
  export default{
    components: {
      banner: Banner,
      navigation: Nav
    }
  }
</script>

<style scoped>
  .bg {
    position:absolute;
    width: 100%;
    height: 100%;
    background-image: url("../assets/temp_bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 -100px;
  }

  .banner{
    margin-top: 150px
  }
</style>
