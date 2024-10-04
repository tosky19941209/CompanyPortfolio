<template>
    <div class="overflow-x-hidden">
        <header class="h-[1200px] w-full pt-2 header-bg">
            <Navbar class=" mt-50 mb-10 lg:mb-20" />
            <div class="content flex  flex-col lg:flex-row lg:justify-between lg:items-center gap-32 mx-20 lg:my-48">

                <section class="left lg:w-[500px] flex flex-col lg:gap-36 gap-7 text-center lg:text-start mt-12">
                    <h1 class="text-white text-5xl font-ubuntu  ">About us</h1>
                    <p class="roboto-regular text-white text-xl">If the path is beautiful, let us not ask where it
                        leads. my religion is very simple. my religion is kindness. each of us has within our power the
                        ability to disrupt</p>
                </section>
                <section class="right lg:mr-36 lg:mt-40 flex justify-center items-center self-center">
                    <img src="~/assets/aboutHeaderImage.png" alt="" width="400">
                </section>

            </div>
        </header>
        <!-- Achievements Section -->
        <Achievements />


        <main>
            <!-- Our story section -->
            <section
                class="our-story bg-red-900 sm:bg-curved flex flex-col items-center gap-20 sm:gap-10 sm:justify-around p-6 sm:p-10">
                <div class="flex flex-col xl:flex-row w-full gap-12 justify-center sm:gap-2">
                    <div class="left relative mt-10 w-max sm:flex-1">
                        <img src="~/assets/aboutOurStory.png" alt="" class="responsive-image">
                        <img src="~/assets/satisfiesClients.png" class="hidden sm:block absolute bottom-10 left-44"
                            alt="" width="350">
                    </div>
                    <div class="right mt-28 sm:w-[700px] flex flex-col gap-5 text-center sm:text-left">
                        <h3 class="font-ubuntu-thin text-white sm:text-red-950 text-3xl">OUR STORY</h3>
                        <h2 class="text-white mt-10 text-4xl font-ubuntu">About Our Consulting Agency Team</h2>
                        <p class="text-white roboto-regular text-lg">Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                            Virginia,</p>
                        <p class="text-white roboto-regular text-lg">Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                            Virginia,</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="headings sm:w-2/3 text-center mx-3">
                        <h1 class="text-white text-3xl sm:text-4xl font-ubuntu">Our core values and principles</h1>
                        <h4 class="text-white roboto-regular mt-4">Capitalize on low hanging fruit to identify a
                            ballpark value added activity beta test. Override the digital divide with additional from
                            DevOps.</h4>
                    </div>
                    <div class="values my-9 flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-between mb-48">
                        <div
                            class="value-card hover:bg-red-900  hover:translate-x-1 hover:translate-y-1 bg-white text-black transition-all w-full sm:w-[272px] mx-auto hover:text-white border border-white rounded-xl p-4 flex flex-col justify-between mb-4 sm:mb-0">
                            <div class="img my-5">
                                <img src="~/assets/value1.png" class="border border-slate-700 rounded-full" alt="">
                            </div>
                            <div>
                                <h3 class="cabin-regular text-xl">Creative ideas</h3>
                                <p class="roboto-regular mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aperiam quidem est dolor tenetur veniam.</p>
                            </div>
                        </div>
                        <div
                            class="value-card hover:bg-red-900 hover:text-white hover:translate-x-1 hover:translate-y-1 transition-all bg-white w-full sm:w-[272px] mx-auto  border border-white rounded-xl p-4 flex flex-col justify-between mb-4 sm:mb-0">
                            <div class="img my-5">
                                <img src="~/assets/value2.png" alt="">
                            </div>
                            <div>
                                <h3 class="cabin-regular text-xl">Creative ideas</h3>
                                <p class="roboto-regular mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aperiam quidem est dolor tenetur veniam.</p>
                            </div>
                        </div>
                        <div
                            class="value-card hover:bg-red-900 hover:text-white hover:translate-x-1 hover:translate-y-1 transition-all bg-white w-full sm:w-[272px] mx-auto  border border-white rounded-xl p-4 flex flex-col justify-between mb-4 sm:mb-0">
                            <div class="img my-5">
                                <img src="~/assets/value3.png" alt="">
                            </div>
                            <div>
                                <h3 class="cabin-regular text-xl">Creative ideas</h3>
                                <p class="roboto-regular mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aperiam quidem est dolor tenetur veniam.</p>
                            </div>
                        </div>
                        <div
                            class="value-card hover:bg-red-900 hover:text-white hover:translate-x-1 hover:translate-y-1 transition-all bg-white w-full sm:w-[272px] mx-auto  border border-white rounded-xl p-4 flex flex-col justify-between mb-4 sm:mb-0">
                            <div class="img my-5">
                                <img src="~/assets/value4.png" alt="">
                            </div>
                            <div>
                                <h3 class="cabin-regular text-xl">Creative ideas</h3>
                                <p class="roboto-regular mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aperiam quidem est dolor tenetur veniam.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            <!-- What client says -->
            <section class="flex flex-col  justify-center  items-center my-20 mx-5 ">
                <div class="flex flex-col lg:flex-row justify-between items-center text-center mx-3 lg:w-[1200px] ">

                    <h1 class="text-start font-ubuntu text-4xl  ">What client says</h1>
                    <p class="lg:w-[440px]">Bootstrap code with a well organised Figma file to design & develop your
                        next website in minutes </p>
                </div>
                <People />
            </section>

            <!-- Brands section -->
            <section class="brands my-16">
                <Brands />
            </section>
        </main>
        <Footer />
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'About | EMT',
    meta: [
        { name: 'description', content: 'The best website maintenance, ecommerce, digital marketing service' }
    ]
})
import '~/assets/css/main.css'
</script>

<style scoped>
.responsive-image {
    width: 100%;
    height: auto;
}

@media (min-width: 640px) {
    .responsive-image {
        max-width: 500px;
    }
}

@media (max-width: 640px) {

    .left,
    .right {
        width: 100%;
        margin-top: 0;
    }

    .right {
        text-align: center;
    }

    .hidden {
        display: none;
    }
}
</style>