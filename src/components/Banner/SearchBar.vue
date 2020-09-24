<template>
    <div id="wrapper">
        <div class="bar">
            <div>
                <input @keydown.enter="searched" v-model="query" type="text" placeholder="Search">
            </div>
            <div>
                <button @click="searched">Go</button>
            </div>
        </div>
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
    *{
        outline: none
    }
    #wrapper{
        width: 500px;
        background-color: plum;
        padding: 25px;
        border-radius: 25px;
        box-shadow: 0 0 5px 15px rgba(0, 0, 0, 0.8);
    }

    input[type='text']{
        text-align: center;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
    }

</style>