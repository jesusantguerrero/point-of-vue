<template>
  <div class="container">
    <slot></slot>
    <h4> Domain Example </h4>
    <!-- tag searcher -->
    <div class="form-group">
        <label for="search" >Filter Tag: </label>
        <input type="text" id="search" v-model="state.searchText" placeholder="Search tag" class="form-control" autocomplete="off"/>
    </div>

    <!-- tag list -->
    <div class="tag-list">
        <h2 class="capitalize">tags</h2>
        
        <ul class="tag-list__container">
        <li v-for="tag in filteredList" :key="tag" class="capitalize tag-item">
            {{ tag }}
        </li>
        </ul>
    </div>
    <!-- .tag list -->

    <!-- counter -->
    <div class="counter">
      <button @click="addCount">count is: {{ state.count }}</button>
    </div>
    <!-- /counter -->

  </div>
</template>

<script setup>
import { computed, reactive } from "vue";

const state = reactive({
  searchText: "",
  list: ["javascript", "hashnode", "vue", "vuex", "vue3"],
  count: 0,
});

// search
const executeSearch = (options) => {
  if (!options.searchText) {
    return options.list;
  }
  return options.list.filter((item) =>
    item.includes(options.searchText.toLowerCase())
  );
};

const filteredList = computed(() => {
  if (!state.list) return [];
  return executeSearch(state);
});

// counter
const addCount = () => {
  state.count++;
};

const substract = () => {
  state.count--;
};
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


.form-group {
    label {
        display: block;
        font-weight: bold;
        margin-bottom: .5rem;
        
    }

    input.form-control {
        padding: 1px 5px;
        height: 34px;
        border-radius: .5rem;
        border: 2px solid #ccc;

        &:hover, &:focus {
            outline: none;
        }
    }
}

.tag-list {
    .tag-list__container {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        margin: auto;
        padding: 0;
    }
    
    .tag-item {
        background: #002240;
        color: white;
        padding: .5rem 1rem;
        border-radius: .5rem;
        margin: 2px 0;
    }
}


.counter {
    margin: 15px 0;
}

.capitalize {
  text-transform: capitalize;
}
</style>
