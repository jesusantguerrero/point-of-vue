<template>
  <button 
        @click="updateModelValue(current)" 
        @mouseover="setCurrentHover(current)"
        @mouseout="setCurrentHover(0)"
    > 
        <slot>{{current}}</slot>
    </button>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

const props = defineProps({
    current: {
        type: Number,
        required: true
    }
})
const updateModelValue = inject('updateModelValue')
const setCurrentHover = inject('setCurrentHover')

</script>