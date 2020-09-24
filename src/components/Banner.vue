<template>
<<<<<<< HEAD
    <div id="banner">
        <div>
            <img alt="temp_logo" src="../assets/temp_logo.jpeg">
=======
    <div id="wrapper">
        <div>
            <img alt="temp_logo" src="../assets/temp_logo.jpeg" style="padding-top:50px;padding-bottom:25px">
>>>>>>> cd504197084dd6d4f80478b257a16374a3b9a08a
            <search-bar></search-bar>
        </div>
    </div>
</template>

<script>
    import SearchBar from './SearchBar.vue'
    export default {
        components: {
            'search-bar': SearchBar
        }
    }
</script>

<style scoped>
<<<<<<< HEAD
    #banner {
        text-align: center;
        background-color: lightskyblue;
        border: 2px solid black;
        width: 100%;
        padding-top: 25px;
        padding-bottom: 25px;
=======
    #wrapper {
        background-color: lightskyblue;
        text-align: center;
        border: 2px solid black;
        width: 100%;
        height: 500px;
>>>>>>> cd504197084dd6d4f80478b257a16374a3b9a08a
    }
</style>