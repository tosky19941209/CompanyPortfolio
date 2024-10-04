<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg-small">
      <Navbar class=" mt-50 mb-4 lg:mb-16" />
      <div class="content flex  flex-col lg:flex-row lg:justify-between lg:items-center gap-32 mx-20 lg:my-">

        <section class="left lg:w-[699px] flex flex-col lg:gap-13 gap-7 text-center lg:text-start mb-5">
          <h1 class="text-white text-5xl font-ubuntu  ">Testimonial</h1>
          <p class="roboto-regular text-white text-xl">If the path is beautiful, let us not ask where it
            leads. my religion is very simple. my religion is kindness. each of us has within our power the
            ability to disrupt</p>
        </section>
        <section class="right lg:mr-20 lg:mt-7 self-center">
          <img src="~/assets/testimonial-header.png" alt="" width="500">
        </section>

      </div>
    </header>

    <main>
      <section class="flex flex-col  justify-center  items-center my-20 mx-5" >
        <div class="flex flex-col lg:flex-row justify-between items-center text-center mx-3 lg:w-[1200px] " >

          <h1 class="text-start font-ubuntu text-4xl  ">What client says</h1>
          <p class="lg:w-[440px]" >Bootstrap code with a well organised Figma file to design & develop your next website in minutes  </p>
        </div>
        <People/>
      </section>
      
      <!-- Our client for every stage section -->
      <section class="bg-red-900 flex flex-col justify-center items-center py-20 px-3 sm:py-48 gap-20" >
        <h2 class="text-4xl font-ubuntu text-white text-center mx-2" >Our Strategy for Every Stage in the Client's Journey</h2>
        <img src="~/assets/strategy-testimonial.png"  alt=""> <!-- Use video here -->
        
      </section>
    </main>
    <Brands/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Testimonial | EMT',
  meta: [
    {name: 'description', content: 'The best website maintenance, ecommerce, digital marketing service'}
  ]
})
</script>

<style>

</style>