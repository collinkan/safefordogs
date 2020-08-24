<template>
    <div>
        <input v-model="query" placeholder="Search">
    </div>    
</template>

<script>
export default {
    data: function() {
        return {
            query: ''
        }
    }
}
</script>

<style scoped>

</style>