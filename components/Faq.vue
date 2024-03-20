<template>
    <!-- Start of the template section -->
    <section class="py-12 md:py-16 lg:py-20 container mx-auto">
        <!-- Container section with padding and alignment -->

        <!-- Iterating over faqsList array -->
        <div v-for="(item, index) in faqsList" :key="index">
            <!-- Start of each FAQ item -->
            <div class="border-t pb-4 border-light">
                <!-- Border and padding for each item -->

                <!-- Clickable area for toggling FAQ -->
                <div @click="toggleFaqs(index)" class="flex justify-between pt-4">
                    <!-- Start of question area -->
                    <button class="w-full text-left">
                        <!-- Button for question -->
                        <!-- QUESTION -->
                        <!-- Displaying the question text -->
                        <h3 class="text-2xl font-normal font-sf-pro text-black-natural me-2">
                            {{ item.question }}
                        </h3>
                    </button>
                    <!-- End of question area -->
                </div>
                <!-- End of clickable area -->

                <!-- Answer section -->
                <div :class="{ 'max-h-[50px] opacity-100': indexValue === index }"
                    class="grid text-base md:text-lg overflow-hidden max-h-0 transition-all opacity-0 duration-[300ms] ease-in mt-2 font-sf-pro text-black-natural me-[40px]">
                    <!-- Conditional class binding based on indexValue -->
                    <!-- ANSWER -->
                    <!-- Displaying the answer text -->
                    <p>
                        {{ item.answer }}
                    </p>
                </div>
                <!-- End of answer section -->
            </div>
            <!-- End of each FAQ item -->
        </div>
        <!-- End of iterating over faqsList array -->
    </section>
    <!-- End of the section -->
</template>
<script setup>
// Importing FAQ data
const faqsList = [
    // Array of FAQ objects
    {
        // First FAQ object
        question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
        // Question text
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, nunc in varius aliquet, sapien arcu tristique felis."
        // Answer text
    },
    // Remaining FAQ objects follow the same structure
];

// Reactive variable for tracking expanded FAQ index
const indexValue = ref(-1);

// Function to toggle expanded state of FAQ
const toggleFaqs = (index) => {
    indexValue.value = indexValue.value === index ? -1 : index;
};
</script>
