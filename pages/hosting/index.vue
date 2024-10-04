<template>
  <div>
    <header class="w-full pt-2 header-bg h-[1200px]">
  <Navbar />
  <div class="content flex flex-col lg:flex-row lg:justify-around mt-20 gap-20 lg:gap-36 items-center my-5 px-4  lg:px-16">
    <!-- Left div -->
    <section class="text-div flex flex-col w-full  md:w-[480px] lg:w-96 justify-center text-center gap-10 mx-auto lg:mx-0 lg:my-64 text-white lg:text-left self-center">
      <h1 class="text-4xl text-pretty font-ubuntu">WEB HOSTING SERVICE</h1>
      <p class="roboto-regular text-xl text-justify lg:text-left">If the path is beautiful, let us not ask where it leads. My religion is very simple. My religion is kindness. Each of us has within our power the ability to disrupt.</p>
    </section>

    <!-- Right div -->
    <section class="app-div flex lg:mt-64   lg:ml-64 w-auto md:w-[400px] lg:w-[500px] justify-center self-center">
      <img src="~/assets/hosting-header.png" class="w-full max-w-md mx-auto lg:mx-0" alt="Hosting Header Image">
    </section>
  </div>
</header>




    <main>
      <section class="flex flex-col justify-center gap-8 items-center">
        <h1 class="font-ubuntu text-5xl text-center">Explore Premium Features</h1>
        <p class="roboto-regular text-gray-800 sm:w-[871px] text-center text-lg">Unique and powerful suite of software
          to run your entire business, brought to you by a company with the long term vision to transform the way you
          work.</p>
        <div class="cards flex flex-col sm:flex-row gap-7 mx-1 ">
          <div class="card flex flex-col gap-2 bg-gray-200 px-12 py-10 rounded-lg shadow-md hover:bg-gray-100 hover:translate-x-1 hover:translate-y-1 cursor-pointer transition-all ">
            <div class="img"><img src="~/assets/powerful-settings.png" alt=""></div>
            <div class="text">
              <h3 class="text-2xl font-ubuntu">Powerful Settings</h3>
              <p class="roboto-regular text-gray-700">Provide excellent customer service.</p>
              <p class="roboto-regular text-gray-700">Answer more tickets.</p>
            </div>
          </div>
          <div class="card flex flex-col gap-2 bg-gray-50 px-20 py-10 rounded-lg shadow-xl shadow-gray-400 hover:bg-gray-100 hover:translate-x-1 hover:translate-y-1 cursor-pointer transition-all">
            <div class="img"><img src="~/assets/user-friendly.png" alt=""></div>
            <div class="text">
              <h3 class="text-2xl font-ubuntu">User Friendly</h3>
              <p class="roboto-regular text-gray-700">Provide excellent customer service.</p>
              <p class="roboto-regular text-gray-700">Answer more tickets.</p>
            </div>
          </div>
          <div class="card flex flex-col gap-2 bg-gray-200 px-12 py-10 rounded-lg shadow-xl hover:bg-gray-100 hover:translate-x-1 hover:translate-y-1 cursor-pointer transition-all ">
            <div class="img"><img src="~/assets/powerful-settings.png" alt=""></div>
            <div class="text">
              <h3 class="text-2xl font-ubuntu">Powerful Settings</h3>
              <p class="roboto-regular text-gray-700">Provide excellent customer service.</p>
              <p class="roboto-regular text-gray-700">Answer more tickets.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Choose your web hosting plan section -->
      <h1 class="text-5xl font-ubuntu-regular my-14 text-center  ">Choose your web hosting plan</h1>
      <Packages/>

      <!-- More than 21 million trust -->
      <section class="bg-trust sm:h-[1396.23px] flex justify-start items-center sm:ml-10 ">
        <div class="left sm:ml-10 mx-4  ">
          <div class="top flex flex-col gap-5">
            <h2 class="text-4xl font-ubuntu text-[#303030] ">More Than 21+ Million Trust</h2>
            <p class="sm:w-[532px]   ">Provide excellent customer service. Answer more tickets all-in-one Primarily
              software</p>

            <p class="roboto-regular text-lg sm:w-[532px] text-justify     ">Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p class="roboto-regular text-lg sm:w-[532px] text-justify     ">Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

            <hr>

          </div>
          <div class="bottom flex py-4 px-5 gap-5">
            <div class="img border-r border-gray-400 px-4">
              <img src="~/assets/best-support.png" alt="">
            </div>
            <div class="awards">
              <h2 class="text-4xl font-ubuntu text-[#303030]"  >5 Star Awards</h2>
              <h3 class=" text-2xl text-[#4E4E4E] inter-thin   "  >For Customer Services</h3>
              <div class="stars">
                <img src="~/assets/Star.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Frequently Asked Question Section -->
      <FAQ/>

    </main>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Hosting | EMT',
  meta: [
    {name: 'description', content: 'The best website hosting service'}
  ]
})
</script>

<style scoped>


.bg-trust {
  background-image: url('/more-than-21.png');
}
</style>