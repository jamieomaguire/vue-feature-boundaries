<template>
  <feature-provider :flags="featureFlags">
    <div id="app">
      <feature-boundary :serverRendered="true" flag="image" :tier="3">
        <img alt="Vue logo" src="./assets/logo.png" />
      </feature-boundary>
      <feature-boundary flag="hello" :tier="1">
        <p>Hi</p>
      </feature-boundary>
      <feature-boundary :serverRendered="true" :tier="3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </feature-boundary>
    </div>
  </feature-provider>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      featureFlags: {
        hello: true,
        image: true,
        featureC: true,
        featureD: false,
        featureE: false
      }
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
