<template>
  <div class="container">
    <slot></slot>
    <h4> TypeScript Example</h4>
    <!-- tag searcher -->
    <div class="form-group">
      <label for="search">Filter Tag: </label>
      <input
        type="text"
        id="search"
        v-model="interest.searchText"
        placeholder="Search tag"
        class="form-control"
        autocomplete="off"
      />
    </div>

    <!-- tag list -->
    <div class="tag-list">
      <h2 class="capitalize">tags</h2>

      <ul class="tag-list__container">
        <li v-for="tag in filteredInterest" :key="tag" class="capitalize tag-item">
          {{ tag }}
        </li>
      </ul>
    </div>
    <!-- .tag list -->
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, unref } from "vue";
import { useSearch } from "../../utils/useSearch";

const interest = reactive({
  searchText: "",
  list: ['javascript', 'hashnode', 'vue', 'vue3', 'laravel', 'supabase', 'productivity'],
});

const { searchText, list } = toRefs(interest);
const { filteredList: filteredInterest } = useSearch(searchText, list);
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
    margin-bottom: 0.5rem;
  }

  input.form-control {
    padding: 1px 5px;
    height: 34px;
    border-radius: 0.5rem;
    border: 2px solid #ccc;

    &:hover,
    &:focus {
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
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
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
