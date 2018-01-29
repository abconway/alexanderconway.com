<template>
  <div id="app">
    <div>
      <div v-for="i in 3"  v-bind:key="i">
        <square v-for="i in 10"  v-bind:key="i"></square>
      </div>
      <ul>
        <li><router-link to="home">Home</router-link></li>
        <li><router-link to="bio">Bio</router-link></li>
        <li><router-link to="resume">R&eacute;sum&eacute;</router-link></li>
        <li><a href="https://github.com/abconway">Github</a></li>
        <li><a href="https://www.linkedin.com/in/abconway2/">LinkedIn</a></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Square from '@/components/Square'

export default {
  name: 'app',
  components: {
    'square': Square,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
