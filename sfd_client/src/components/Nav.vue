<template>
    <div class="container">
        <div class="btn">
            <div class="menu">
                <button @click="menu_toggle"></button>
            </div>
            <div class="home">
                <button></button>
            </div>
            <div class="github">
                <form target="_blank" rel="noopener noreferrer" :action="gh_url">
                    <button></button>
                </form>
            </div>
            <div class="linkedin">
                <form target="_blank" rel="noopener noreferrer" :action="li_url">
                    <button></button>
                </form>
            </div>
        </div>
        <side-menu :menu="menu" @menuToggle="menu_toggle"></side-menu>
    </div>
</template>

<script>
    import SideMenu from './SideMenu.vue'
    export default {
        data(){
            return{
                menu: false,
                li_url: "https://www.linkedin.com/in/collinkan/",
                gh_url: "https://github.com/collinkan"
            }
        },
        methods: {
            menu_toggle() {
                this.menu = !this.menu
            }
        },
        components: {
            'side-menu': SideMenu
        }
    }
</script>

<style scoped>
    *{
        outline: none;
    }

    .btn {
        background-color: rgba(50, 125, 200, 0.5);
        text-align: center;
        padding: 15px;
    }
    
    .menu{
        float: left;
        margin-left: 5px;
        background-image: url("../assets/menu.png");
        background-size: 62px;
        background-repeat: no-repeat;
    }
    .menu:hover{
        filter: brightness(200%)
    }
    .menu:active{
        filter: brightness(75%)
    }

    .home{
        display: inline-block;
    }

    .github{
        float: right;
        margin-right: 5px;
        background-image: url("../assets/github.png");
        filter: invert(26%) sepia(78%) saturate(2192%) hue-rotate(140deg) brightness(93%) contrast(101%);
        background-size: 60px;
        background-repeat: no-repeat;
    }
    .github:hover{
        filter: invert(26%) sepia(78%) saturate(2192%) hue-rotate(140deg) brightness(93%) contrast(101%) brightness(110%);
    }
    .github:active{
        filter: invert(26%) sepia(78%) saturate(2192%) hue-rotate(140deg) brightness(93%) contrast(101%) brightness(75%);
    }

    .linkedin{
        float: right;
        margin-right: 20px;
        background-image: url("../assets/linkedin.png");
        filter: hue-rotate(310deg);
        background-size: 60px;
        background-repeat: no-repeat;
    }
    .linkedin:hover{
        filter: hue-rotate(310deg) brightness(110%)
    }
    .linkedin:active{
        filter: hue-rotate(310deg) brightness(75%)
    }

    button {
        border: none;
        background-color: transparent;
        padding: 30px;
        cursor: pointer;
    }

</style>

