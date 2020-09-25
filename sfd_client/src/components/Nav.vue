<template>
    <div class="container">
        <div class="btn">
            <div class="menu">
                <button @click="menu_toggle"></button>
            </div>
            <div class="home">
                <button>{{ menu }}</button>
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
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>
    *{
        outline: none;
    }
    .container {
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

    .home{
        display: inline-block;
    }

    .github{
        float: right;
        margin-right: 5px;
        background-image: url("../assets/github.png");
        background-size: 60px;
        background-repeat: no-repeat;
    }

    .linkedin{
        float: right;
        margin-right: 20px;
        background-image: url("../assets/linkedin.png");
        background-size: 60px;
        background-repeat: no-repeat;
    }

    button {
        border: none;
        background-color: transparent;
        padding: 30px;
        cursor: pointer;
    }

</style>

