<template>
  <div>
    <div class="layout-container">
        <ul class="example-list">
          <li
            v-for="example in options" :key="example" 
            class="example-item" 
            :class="{selected: selectedOption==example}"
            @click="selectedOption=example">
            {{ example }}
          </li>
        </ul>
        <div class="example-display">
          <h2 class="title"> From my point of Vue: Composition API</h2>
          <div class="example-display__presenter">
            <DomainExample v-if="selectedOption=='domain'"></DomainExample>
            <TypeScriptExample v-if="selectedOption=='typescript'"></TypeScriptExample>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue"
import DomainExample from "./DomainExample.vue"
import TypeScriptExample from "./TypeScriptExample.vue"

const state = reactive({
  options: ['domain', 'typescript', 'composable'],
  selectedOption: 'domain'
})

const {options, selectedOption } = toRefs(state)

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.layout-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.example-list {

  width: 240px;
  list-style: none;
  margin: 67px 5px;
}

.example-display {
  max-width: 825px;
  min-width: 288px;
  width: 100%;

  &__presenter {
    background: whitesmoke;
    padding: 15px 0;
  }
}

.capitalize {
  text-transform: capitalize;
}


.title {
  color: #2c3e50;
}

.example-item {
  text-transform: capitalize;
  cursor: pointer;
  padding: .5rem;
  text-align: left;
  transition: all ease .3s;
  border-radius: .275rem;
  margin: 2px 0;

  &:hover,&.selected {
    background: #173858bb;
    color: white;
  }
}
</style>