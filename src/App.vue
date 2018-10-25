<template>
    <div id="app">
        <CartBar/>
        <router-view/>
    </div>
</template>

<script>
import CartBar from './components/CartBar'

export default {
    name: 'App',
    components: {
        CartBar
    },
    data () {
        return {

        }
    },
    mounted () {}
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-left: 2rem;
    margin-right: 2rem;
}

</style>
