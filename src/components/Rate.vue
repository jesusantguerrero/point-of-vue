<template>
    <div>
        <slot v-for="current in range" :key="current" :max="max" :min="min" :current="current+1" :selected="modelValue>current">
            {{ current }}
        </slot>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    },
    max: {
        type: Number,
        default: 5
    },
    min: {
        type: Number,
        default: 1
    }
});

const range = computed(() => {
    return [...Array(props.max).keys()]
})
</script>