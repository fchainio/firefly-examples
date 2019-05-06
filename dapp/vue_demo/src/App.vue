<template>
  <div id="app">
      <img class='logo' src="@/assets/logo.png" alt="">
        <h1 class='index_t_h1'>FireFly Wallet DApp Demo</h1>
        
    <HelloWorld/>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 0.4167rem;
    }
    
    .logo {
        width: 1.0648rem;
        height: 1.0648rem;
        margin: 0.5556rem auto;
    }
    
    .index_t_h1 {
        font-size: 0.4444rem;
        color: #213a5a;
        margin-bottom: 0.3704rem;
    }
    
    .index_t_p {
        font-size: 0.3333rem;
        color: #717f90;
        line-height: 1.5;
        margin-bottom: 0.7407rem;
    }
</style>