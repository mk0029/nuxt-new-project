<template>
    
    <NuxtLink v-if="url && title" :to="url"  :class="className" class=" font-black border border-solid border-black text-3xl bg-trnasparent py-3.5 px-8 text-black leading-120">{{title}}</NuxtLink>
    <button v-else v-if="title" :class="className && className" class=" font-black border border-solid border-black text-3xl bg-trnasparent py-3.5 px-8 text-black leading-120">{{title}}</button>
</template>
<script setup>
const props = defineProps({
    className: String,
    title: String,
    url: String,
});</script>