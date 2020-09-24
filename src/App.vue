<template>
  <div>
    <banner></banner>
    <br>
    <hr>
    <br>
    <navigation></navigation>
  </div>
</template>

<script>
  import Banner from './components/Banner/Banner.vue'
  import Nav from './components/Nav.vue'
  export default{
    components: {
      banner: Banner,
      navigation: Nav
    }
  }
</script>

<style>
  *{
    margin: 0;
  }
</style>