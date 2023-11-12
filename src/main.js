/*
 * Intro-It Project - Create a GitHub Profile Readme Intro
 *
 * Intro-It is a project designed to craft compelling intros for your GitHub profile readme.md.
 * It aims to provide an engaging and interactive introduction to make your profile stand out.
 *
 * Project Repository: https://github.com/Coder2Mo/Intro-It
 *
 * Author: Mohamed Salem
 * Email: Eng_freelance@outlook.com
 * Copyright (C) 2023 Mohamed Salem. All rights reserved.
 * Licensed under the MIT License.
 */

import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

// Initialize TypeIt for a professional Intro Writer effect
new TypeIt("#inner-demo-2", {
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
