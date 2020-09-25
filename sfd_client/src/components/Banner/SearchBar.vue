<template>
    <div id="wrapper">
        <div class="bar">
            <input @keydown.enter="searched" v-model="query" type="text" placeholder="Search">
            <button @click="searched"></button>
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
        outline: none;
        border: none;
    }

    #wrapper{
        display: inline-block;
        background-color: rgba(221,160,221, 0.85);
        padding: 15px;
        border-radius: 25px;
        box-shadow: 0 0 2px 10px rgba(250, 250, 250, 0.95);
    }

    .bar{
        display: flex;
    }

    input[type='text'], button{
        color: rgb(250,250,250);
        background-color: transparent;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 30px;
        padding: 10px;
        background-color: transparent;
        cursor: pointer;
    }
    input[type='text']::placeholder{
        color: rgba(150, 100, 150, 0.85);
    }

    button{
        width: 64px;
        background-image: url("../../assets/temp_search.png");
        background-size: 60px;
        background-repeat: no-repeat;
        background-position: 1px 1px;
        opacity: 0.70;
    }
    button:hover{
        opacity: 0.90;
    }
    button:active{
        opacity: 0.70;
    }

</style>