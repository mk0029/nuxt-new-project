<template>
    <!-- Lets Start  -->
    <!-- TODO  ///// npm install --save-dev nuxt-aos \\\\\\\\ -->
    <!-- TODO  pest  this code  in nuxt.config.js file >> /////  [modules: ['nuxt-aos']     \\\\\\ -->
    <!-- TODO and simply  use  as  as we  use in react/next/html etc. -->
    <div class=" container mx-auto">
        <div class=" flex flex-wrap -mx-3 mt-10 gap-y-6">
            <div class=" w-6/12 px-3 col_6">
                <div data-aos="fade-right" class="data_aos"></div>
            </div>
            <div class=" w-6/12 px-3 col_6">
                <div data-aos="fade-left" data-aos-delay="200" class="data_aos"></div>
            </div>
            <div class=" w-6/12 px-3 col_6">
                <div data-aos="fade-right" data-aos-delay="300" class="data_aos"></div>
            </div>
            <div class=" w-6/12 px-3 col_6">
                <div data-aos="fade-left" data-aos-delay="400" class="data_aos"></div>
            </div>
            <div class=" w-6/12 px-3 col_6">
                <div data-aos="fade-right" data-aos-delay="500" class="data_aos"></div>
            </div>
            <div class=" w-6/12 px-3 col_6">
                <div data-aos="fade-left" data-aos-delay="600" class="data_aos"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.data_aos {
    height: 200px;
    width: 100%;
    border: 2px solid whitesmoke;
    border-radius: 10px;
}

.col_6 .data_aos:nth-child(1) {
    background: #000;
    border-color: rgb(93, 0, 255) !important;
}

.col_6:nth-child(2) .data_aos {
    background: #7d0606;
    border-color: rgb(0, 255, 21) !important;
}

.col_6:nth-child(3) .data_aos {
    background: #067d4d;
    border-color: rgb(255, 217, 0) !important;
}

.col_6:nth-child(4) .data_aos {
    background: #c602fc;
    border-color: rgb(0, 0, 0) !important;
}

.col_6:nth-child(5) .data_aos {
    background: #5bff29;
    border-color: rgb(111, 0, 255) !important;
}

.col_6:nth-child(6) .data_aos {
    background: #1e7d067f;
    border-color: rgb(0, 102, 255) !important;
}
</style>