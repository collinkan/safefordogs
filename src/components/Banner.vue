<template>
    <div id="banner">
        <div>
            <img alt="temp_logo" src="../assets/temp_logo.jpeg">
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
    #banner {
        text-align: center;
        background-color: lightskyblue;
        border: 2px solid black;
        width: 100%;
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>