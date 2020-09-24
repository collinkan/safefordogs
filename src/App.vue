<template>
  <div>
    <banner></banner>
    <hr>
    <navigation></navigation>
  </div>
</template>

<script>
  import Banner from './components/Banner.vue'
  import Nav from './components/Nav.vue'
  export default{
    components: {
      banner: Banner,
      navigation: Nav
    }
  }
</script>

<style scoped>

</style>