<template>
    <!-- Lets Start  -->
    <!-- TODO  ///// npm install gsap \\\\\\\\ -->
    <!-- TODO  create  a vite  file  named  >>> vite.config.js  -->
    <!-- TODO  pest  this code  in vite.config.js file >> ///// import { defineConfig } from 'vite';export default defineConfig({optimizeDeps: {include: ['gsap'],},}); \\\\\\ -->
    <button class="button-reset" @click="resetAnimation">Reset Animation</button>
    <div class="flex w-full h-screen justify-center items-center flex-col overflow-hidden">
        <div ref="box" class="box">Hello GSAP</div>
        <div ref="btnParent" class=" flex justify-center items-center rounded-full relative">
            <span ref="coverPage" class="scale-0 absolute h-[500px] w-[500px] bg-black rounded-full -z-10"></span>
            <button ref="button" class="button">Boomm</button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
const box = ref(null);
const button = ref(null);
const btnParent = ref(null);
const coverPage = ref(null);
const animateBox = () => {
    gsap.fromTo(box.value, { x: -100, y: -100, rotation: -360 }, { duration: 1, x: 0, y: 0, rotation: 360, onComplete: animateButton });
};
const animateButton = () => {
    gsap.fromTo(button.value, { backgroundColor: 'blue', }, { duration: 0.5, backgroundColor: 'orchid', height: 150, width: 150, borderRadius: 999 });
    gsap.fromTo(btnParent.value, { scale: 1, }, { duration: 1, scale: 4, onComplete: animateCoverPage });
};
const animateCoverPage = () => {
    gsap.fromTo(button.value, { scale: 1 }, { onStart: hideCover, duration: 3, scale: 4, });
};
const hideCover = () => {
    gsap.fromTo(button.value, { opacity: 1 }, { delay: 1, pointerEvents: "none", opacity: 0 });
};
const resetAnimation = () => {
    gsap.killTweensOf([box.value, button.value, btnParent.value]); // Stop ongoing animations
    gsap.set(box.value, { clearProps: 'all' }); // Reset box properties
    gsap.set(button.value, { clearProps: 'all' }); // Reset button properties
    gsap.set(btnParent.value, { clearProps: 'all' }); // Reset button parent properties
    animateBox()
};
onMounted(() => {
    animateBox()
});
</script>
<style scoped>
.button {
    padding: 10px 20px;
    background-color: blue;
    color: chartreuse;
    margin-top: 20px;
    cursor: pointer;
}

.button-reset {
    padding: 10px 20px;
    background-color: blue;
    color: chartreuse;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 10px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
<!-- The code below provides explanatory comments for each section of the code -->

<!-- Template section: Defines the structure of the component -->
<!-- Includes a button for resetting animation and two div elements for animation -->
<!-- The box element will be animated initially, and the button element will be animated subsequently -->

<!-- Script Setup section: -->
<!-- Imports necessary libraries (Vue.js and GSAP) -->
<!-- Initializes references for DOM elements using Vue's ref function -->
<!-- Defines animation functions to handle animations using GSAP -->
<!-- Utilizes Vue's onMounted hook to trigger initial animation when component is mounted -->

<!-- Animation Functions: -->
<!-- animateBox: Rotates and moves the box element to the center -->
<!-- animateButton: Animates the button element by changing its background color, size, and scaling the parent element -->
<!-- animateCoverPage: Further animates the button element by scaling it and triggering hideCover function -->
<!-- hideCover: Hides the button element by reducing opacity and disabling pointer events -->
<!-- resetAnimation: Resets all animations and reinitializes the animation -->

<!-- Styling section: Defines styles for button and box elements -->