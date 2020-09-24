<template>
    <div id="container">
        <div class="logo">
            <img alt="temp_logo" src="../../assets/temp_logo.jpeg">
        </div>
        <div class="search">
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
    #container {
        padding: 25px;
        background-color: lightskyblue;
        text-align: center;
        min-width: 100%;
    }
</style>