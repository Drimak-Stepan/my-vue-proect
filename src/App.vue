<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <ButtonAll @:click="increment" type="button" outlined>click me</ButtonAll>
  </div>
</template>

<script>
import ButtonAll from "./components/Button";

export default {
  name: "App",
  components: { ButtonAll },
  data() {
    return { amoutOfClicks: 0 };
  },
  computed: {
    title() {
      return `Amout of clicks ${this.amoutOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amoutOfClicks += 1;
    },
  },
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
