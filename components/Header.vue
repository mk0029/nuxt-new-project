<template>
    <div class=" w-full bg-white">
        <ul data-aos="fade-down" data-aos-delay="400" class=" flex items-center gap-x-10 mt-3 mx-5">
            <li data-aos-delay="600" data-aos="zoom-in-down">
                <NuxtLink to="/faqs">Faqs</NuxtLink>
            </li>
            <li data-aos-delay="700" data-aos="zoom-in-down">
                <NuxtLink to="/gsap">gsap</NuxtLink>
            </li>
            <li data-aos-delay="800" data-aos="zoom-in-down">
                <NuxtLink to="/email-js">email-js</NuxtLink>
            </li>
            <li data-aos-delay="900" data-aos="zoom-in-down">
                <NuxtLink to="/aos">aos</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<style scoped>
ul li a {
    display: inline-block;
    border-radius: 6px;
    padding: 7px 38px;
    color: white;
    background: #000;
    text-transform: capitalize;
}
</style>