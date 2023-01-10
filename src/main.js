import Vue from "vue";
import App from "./App.vue";
import MakeIt from "introit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

// Initialize MakeIt for a professional Intro Writter effect
new MakeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
})
  .pause(1000)
  .type('<span style="font-family: Segoe UI Emoji">👋🏼</span>', { html: true })
  .type("&nbspHi&nbspthere!&nbspI'm&nbspMo")
  .pause(750)
  .delete(3, { deleteSpeed: 130 })
  .pause(500)
  .type("&nbsp@Coder2Mo")
  .move(8)
  .delete(1)
  .move("END")
  .pause(1000)
  .go();
