<template>
  <div>
    <back-drop></back-drop>
  </div>
</template>

<script>
  import Backdrop from './views/Backdrop.vue'
  export default{
    components: {
      'back-drop': Backdrop
    }
  }
</script>

<style>
  *{
    margin: 0;
  }
</style>