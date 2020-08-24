<template>
    <div>
        <input @keydown.enter="searched" v-model="query" placeholder="Search" size="50">
        <button @click="searched">Go</button>
    </div>    
</template>

<script>
export default {
    data: function() {
        return {
            query: '',
        }
    },
    methods: {
        searched() {
            alert("Searching for " + this.query)
        }
    }
}
</script>

<style scoped>

</style>