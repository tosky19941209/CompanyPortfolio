<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg-small">
      <Navbar />
      <div class="content flex justify-around gap-36 items-center my-36">
        <div class="dabba flex flex-col justify-center items-center w-[500px] gap-7 text-center">

          <h1 class="font-ubuntu text-5xl text-white">OUR PROJECTS</h1>
          <p class=" text-xl text-white roboto-regular">If the path is beautiful, let us not ask where it leads. my
            religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt</p>
        </div>
      </div>
    </header>
    <main class="my-20">
      <section class="flex flex-col justify-center items-center my-10">
        <div class="black bg-black max-w-[1043px] px-6 py-5 rounded-3xl ">
          <ul class="flex flex-col sm:flex-row gap-9 text-white text-2xl cabin-light">
            <div class="flex gap-5 justify-between px-2 ">
              <li class="text-yellow-500  underline underline-offset-8">All</li>

              <li>Web Design</li>
            </div>
            <li>Graphic Design</li>
            <li>SEO & Digital Marketing</li>
          </ul>
        </div>
        <div class="flex justify-center self-center px-2" >

          <div class="container grid grid-cols-1 sm:grid-cols-3 gap-y-16 gap-x-6 my-20 overflow-x-hidden sm:w-[1535px]">
            <img src="~/assets/projects1.png" alt="">
            <img src="~/assets/projects2.png" alt="">
            <img src="~/assets/projects3.png" alt="">
            <img src="~/assets/projects4.png" alt="">
            <img src="~/assets/projects5.png" alt="">
            <img src="~/assets/projects6.png" alt="">
          </div>
        </div>


      </section>
      <!-- Form section -->
      <Form class="mb-96" />
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Portfolio | EMT',
  meta: [
    {name: 'description', content: 'The best website maintenance, ecommerce, digital marketing service'}
  ]
})
import '~/assets/css/main.css'
</script>

<style scoped></style>