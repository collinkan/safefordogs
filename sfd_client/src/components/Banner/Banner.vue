<template>
    <div id="container">
        <div class="logo">
            Safe For Dogs?
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
        color: rgb(221,160,221);
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        font-family: 'Comic Sans MS', sans-serif;
        font-weight: 1000;
        font-size: 50px;
    }

    .search {
        display: inline-block;
        padding: 25px;
    }
</style>