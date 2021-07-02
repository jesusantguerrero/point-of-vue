<template>
  <div class="container">
    The rate is {{ rateValue }}
    <Rate v-model="rateValue" :max="7">
        <template v-slot:default="{ current, selected }">
            <button @click="rateValue=current" :class="{ selected: selected }"> {{ current }} </button>
        </template>
    </Rate>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import Rate from '../../components/Rate.vue';

const rateValue = ref(0);
</script>

<style>

.selected {
    background: dodgerblue;
    color: white;
}
</style>