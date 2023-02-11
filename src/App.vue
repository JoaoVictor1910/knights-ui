<template>
  <div>
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/core/NavigationBar'

export default {
  components: {
    NavigationBar
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
  background-image: linear-gradient(to top, #2a2a2a, #303030, #363636, #3c3c3c, #424242, #4c4c4c, #565656, #606060, #707070, #808080, #919191, #a2a2a2);
}
body{
  margin: 0;
  background: #2a2a2a;
}
a{
  color: #fff;
}
</style>
