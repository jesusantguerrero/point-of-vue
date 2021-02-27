<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <DomainExample></DomainExample>
    <TypeScriptExample></TypeScriptExample>
  </div>
</template>

<script setup>
import DomainExample from "./views/composition/DomainExample.vue"
import TypeScriptExample from "./views/composition/TypesScriptExample.vue"

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