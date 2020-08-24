<template>
    <div id="wrapper">
        <div>
            <img alt="temp_logo" src="../assets/temp_logo.jpeg" style="padding-top:50px;padding-bottom:25px">
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
    #wrapper {
        background-color: lightskyblue;
        text-align: center;
        border: 2px solid black;
        width: 100%;
        height: 500px;
    }
</style>