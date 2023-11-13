<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from "./components/MainComponent";

export default {
  name: "App",
  components: {
    MainComponent,
  },
};
</script>

<style>
#app {
  font-family: "Consolas", "fixed-width";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>