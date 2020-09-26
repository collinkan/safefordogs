<template>
    <div v-show="menu">
        <div class="filter"></div>
        <div class="sidemenu" >
            <button class="close" @click="menu_toggle">Close</button>
            <div class="categories">
                <div class="header">SEARCH BY CATEGORY</div>
                <button id="option">Fruits</button>
                <button id="option">Vegetables</button>
                <button id="option">Sweets</button>
                <button id="option">Drinks</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        menu_toggle() {
            this.menu = !this.menu
            this.$emit('menuToggle', this.menu);
        }
    }
}
</script>

<style scoped>
    .filter{
        height:100%;
        width:100%;
        position: absolute; top: 0; left: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 1;
    }

    .sidemenu{
        height: 100%;
        width: 15%;
        position: absolute; top:0; left:0;
        background-color: white;
        z-index: 2;
    }

    .close{
        float: right;
    }

    .categories{
        margin-top: 25%;
    }

    .header{
        text-align: left;
        color: rgb(150,150,150);
        font-family: 'Nunito', sans-serif;
        font-weight: 1000;
        font-size: 18px;
        width: 100%;
        padding: 20px;
    }

    #option{
        text-align: left;
        border:none;
        outline: none;
        color: rgb(85,85,85);
        font-family: 'Nunito', sans-serif;
        font-weight: 1000;
        font-size: 18px;
        width: 100%;
        padding: 20px;
        background-color: transparent;
    }
    #option:hover{
        background-color: rgba(0,0,0,0.25)
    }
</style>