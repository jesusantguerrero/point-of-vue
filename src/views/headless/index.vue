<template>
  <div class="container">
  <h4 class="font-bold"> The rate is {{ rateValue }} </h4>
    <Rate v-model="rateValue" :max="10" class="mt-4 space-x-2" v-slot:default="{ current, selected }">
        <RateButton 
          class="w-8 font-bold transition bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-400 hover:text-white hover:border-blue-400" 
          :class="{ 'bg-gray-400 text-white': selected }"
          :current="current"
        /> 
    </Rate>

      <Rate v-model="rateValue" :max="10" class="mt-4 space-x-2" v-slot:default="{ current, selected }">
        <RateButton 
          class="w-8 font-bold text-gray-400 transition rounded-lg  hover:text-yellow-500" 
          :class="{ 'text-yellow-500': selected }"
          :current="current"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z" fill="currentColor"></path></svg>
        </RateButton>
    </Rate>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { Rate, RateButton } from '../../components/Rate/';

const rateValue = ref(0);
</script>

<style>

.selected {
    background: dodgerblue;
    color: white;
}
</style>