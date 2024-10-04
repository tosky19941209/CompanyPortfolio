<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg">
      <Navbar />
      <div class="content flex flex-col lg:flex-row sm:justify-around  mt-20 gap-20 lg:gap-36 items-center my-5">
        <!-- Left div -->
        <section class="text-div flex flex-col lg:w-96 justify-center text-center  gap-10  mx-16 lg:my-64 text-white">
          <h1 class="text-6xl text-pretty font-ubuntu">CONTACT US</h1>
          <p class="roboto-regular text-xl text-justify ">If the path is beautiful, let us not ask where it leads. My religion is very
            simple. My religion is kindness. Each of us has within our power the ability to disrupt.</p>
        </section>

        <!-- Right div -->
        <section class="app-div flex lg:mt-64 lg:ml-64 self-center">
          <img src="~/assets/contactUsHeaderImage.png" width="750" alt="">
        </section>

      </div>
    </header>

    <main>
      <QueryForm/>
      <!-- Addresses section -->
      <section class="flex justify-center items-center my-20" >
        <div class="w-[996px] flex flex-col sm:flex-row items-center gap-10 justify-around " >
          <div class="flex flex-col gap-4  justify-center" >
            <div class="title flex gap-4" >
              <img src="~/assets/phone-2.png" alt="">
              <h3 class="font-ubuntu text-xl" >Call Us</h3>
            </div>
            <div>
              <h4 class="roboto-normal text-gray-700" >+1-940-394-2948</h4>
              <h4 class="roboto-normal text-gray-700" >+1-389-385-3807</h4>
            </div>
          </div>
          <div class="flex flex-col gap-4" >
            <div class="title flex gap-4 justify-center " >
              <img src="~/assets/email-83.png" alt="">
              <h3 class="font-ubuntu text-lg " >Email Us</h3>
            </div>
            <div>
              <h4 class="roboto-normal text-gray-700" >support@brainwave.io</h4>
              <h4 class="roboto-normal text-gray-700" >support@brainwave.io</h4>
            </div>
          </div>
          <div class="flex flex-col gap-4  justify-center" >
            <div class="title flex gap-4" >
              <img src="~/assets/pin-3-2.png" alt="">
              <h3 class="font-ubuntu text-xl" >Call Us</h3>
            </div>
            <div>
              <h4 class="roboto-normal text-gray-700" >+1-940-394-2948</h4>
              <h4 class="roboto-normal text-gray-700" >+1-389-385-3807</h4>
            </div>
          </div>
        
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contact | EMT',
  meta: [
    {name: 'description', content: 'The best website maintenance, ecommerce, digital marketing service'}
  ]
})
</script>

<style></style>