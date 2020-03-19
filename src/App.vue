<template>
  <div id="app">
    <container>
      <h1>Photo Fetcher</h1>
      <fetcher></fetcher>
    </container>
  </div>
</template>

<script>
import Container from "./components/layout/Container";
import Fetcher from "./components/fetcher/Fetcher";

export default {
  name: 'App',
  components: {
    Fetcher,
    Container
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  * {
    box-sizing: border-box;
  }
}
</style>
