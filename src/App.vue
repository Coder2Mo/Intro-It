<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
#app {
  font-family: "Consolas", fixed-width;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
