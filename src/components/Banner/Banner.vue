<template>
    <div id="container">
        <div class="logo">
            <img alt="temp_logo" src="">
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
        background-color: transparent;
        text-align: center;
    }

    .logo{
        padding: 25px
    }

    .search {
        display: inline-block;
        padding: 25px;
    }
</style>