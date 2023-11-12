<template>
  <div class="hello">
    <div id="demo">
      <div id="inner-demo">
        <h1 id="inner-demo-2"></h1>
      </div>
    </div>
    <!-- VueParticle component to add particle animation -->
    <VueParticle domId="demo" :config="particleConfig" />
  </div>
</template>

<script>
import VueParticle from "vue-particlejs";

export default {
  name: "MainComponent",
  props: {
    msg: String,
  },
  components: {
    VueParticle,
  },
  data() {
    return {
      // Particle configuration options
      particleConfig: {
        particles: {
          number: { value: 300, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      },
    };
  },
};
</script>

<style scoped>
/* Styles for the demo section */
#demo {
  width: 100%;
  height: 50vh;
  background: rgb(255, 255, 255);
}

/* Styles for the inner-demo section */
#inner-demo {
  width: 100%;
  height: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
}

/* Styles for the inner-demo h1 element */
#inner-demo h1 {
  position: relative;
  top: 4em;
}
</style>
