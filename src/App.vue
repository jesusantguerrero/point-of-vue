<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    
    <!-- tag searcher -->
    <input type="text" v-model="state.searchText">
    <h2>tags</h2>
    <ul>
      <li v-for="tag in filteredList" :key="tag" class="capitalize"> 
        {{ tag }}
      </li>
    </ul>

    <!-- counter -->
    <div>
      
    <button @click="addCount">count is: {{ state.count }}</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";

const state = reactive({
  searchText: '',
  list: ['javascript', 'hashnode', 'vue', 'vuex', 'vue3'],
  count: 0,
});


// search 
const executeSearch = (options) => {  
  if (!options.searchText) {
      return options.list
  }
  return options.list.filter( item => item.includes(options.searchText.toLowerCase()))  
}

const filteredList = computed(() => {
  if (!state.list) return [];
  return executeSearch(state);
})

// counter
const addCount = () => {
  state.count ++
}

const substract = () => {
  state.count --
}

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


.search {

}

.tags {

}

.capitalize {
  text-transform: capitalize;
}
</style>