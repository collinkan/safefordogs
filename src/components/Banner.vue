<template>
    <div>
        <div class="logo">
            <img alt="temp_logo" src="../assets/temp_logo.jpeg">
        </div>
        <div class="searchbar">
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
        text-align: center; 
        font-size: 50px;
    }

    #searchbar {

    }
</style>