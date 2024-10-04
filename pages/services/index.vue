<template>
  <div class="overflow-x-clip" >
    <header class="h-[1200px] w-full pt-2 header-bg-small">
      <Navbar />
      <div class="content flex justify-around gap-36 items-center my-36">
        <div class="dabba flex flex-col justify-center items-center w-[500px] gap-7 text-center">

          <h1 class="font-ubuntu text-5xl text-white">Services</h1>
          <p class=" text-xl text-white roboto-regular">If the path is beautiful, let us not ask where it leads. my
            religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt</p>
        </div>
      </div>
    </header>
    <main>
      <section class="flex flex-col lg:flex-row justify-evenly items-center px-4 gap-20 ">
        <div class="img"><img src="~/assets/services.png" alt=""></div>
        <div class="text-content lg:w-[674px] flex flex-col gap-6  ">
          <h2 class="text-4xl font-ubuntu ">We take your buisness from thousands to millions</h2>
          <p class="roboto-regular text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudinbibendum
            senectus scelerisque non. Turpis matis morbi vivera ipsum adipiscing Mauris volutpat sagittis, sit nulla.
            Velit et augues vitae Mattis at nibh nullas placerat imperdiet cursus viverra justo amet. Ipsum duis tempor.
          </p>
          <ul class="flex flex-col gap-2">
            <li class="roboto-regular flex items-center gap-2 text-lg "> <img src="~/assets/tick.svg" alt=""> Dolor duis
              lorem enim eu turpis potenti nulla semper </li>
            <li class="roboto-regular flex items-center gap-2 text-lg "> <img src="~/assets/tick.svg" alt=""> Lorem a
              eget blandit ac neque dapibus pulvinar</li>
            <li class="roboto-regular flex items-center gap-2 text-lg "> <img src="~/assets/tick.svg" alt="">
              Pellentesque non integer ac id imperdiet sit bibendum</li>
          </ul>
        </div>
      </section>

      <!-- Our services section -->
      <Services />

      <!-- Why Choose Us Section -->
      <WhyChoose />

      <!-- FAQ Section -->
      <FAQ />
      <section class="flex flex-col justify-center items-center">
        <!-- What client says section -->
        <div class="  flex justify-center sm:text-center sm:w-max  ">

          <h2 class=" text-5xl sm:text-4xl font-ubuntu-regular sm:font-ubuntu text-center sm:text-center ">What Client
            says</h2>
        </div>
        <People />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Services | EMT',
  meta: [
    {name: 'description', content: 'The best website maintenance, ecommerce, digital marketing service'}
  ]
})
</script>

<style></style>