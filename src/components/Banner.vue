<template>
    <div>
        <div id="logo">
            <img alt="temp_logo" src="../assets/temp_logo.jpeg">
        </div>
        <div id="searchbar">
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
    #logo {
        float: left;
    }
    #searchbar {
        float: left;
    }
</style>