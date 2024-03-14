<template>
    
    <NuxtLink v-if="url && title" :to="url"  :class="className" class=" font-black text-5xl bg-black py-6 px-8 text-white leading-120">{{title}}</NuxtLink>
    <button v-else v-if="title" :class="className && className" class=" font-black text-5xl bg-black py-6 px-8 text-white leading-120">{{title}}</button>
</template>
<script setup>
const props = defineProps({
    className: String,
    title: String,
    url: String,
});</script>