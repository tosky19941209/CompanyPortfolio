<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg-small">
      <Navbar class=" mt-50 mb-4 sm:mb-16" />
      <div class="content flex  flex-col sm:flex-row sm:justify-between sm:items-center gap-32 mx-20 sm:my-">

        <section class="left sm:w-[699px] flex flex-col sm:gap-13 gap-7 text-center sm:text-start mb-5">
          <h1 class="text-white text-5xl font-ubuntu  ">Branding & Design Service</h1>
          <p class="roboto-regular text-white text-xl">If the path is beautiful, let us not ask where it
            leads. my religion is very simple. my religion is kindness. each of us has within our power the
            ability to disrupt</p>
        </section>
        <section class="right sm:mr-20 sm:mt-7">
          <img src="~/assets/branding-design-service.png" alt="" width="400">
        </section>

      </div>
    </header>
    <main>
      <Achievements />
      <section class="my-20 flex flex-col gap-7 md:flex-row justify-around items-center px-2 ">
        <img src="~/assets/pic.png" alt="">
        <article class="sm:w-[550px] flex flex-col gap-6  ">
          <h2 class="font-ubuntu text-4xl">An Experienced Design Agency</h2>
          <div class="text-content flex flex-col gap-4 ">
            <h4 class="font-ubuntu-regular text-xl text-red-900">Provides a full service range</h4>

            <p class="text-lg roboto-regular">Exploring the free Apple Watch Landing Page Design in Figma gives you an
              exciting opportunity to explore the aesthetics and functionality of popular Apple products</p>
            <p class="text-lg roboto-regular">Exploring the free Apple Watch Landing Page Design in Figma gives you an
              exciting opportunity to explore the aesthetics and functionality of popular Apple products</p>
          </div>
        </article>
      </section>

      <!-- Service we provide for you section -->
      <section class=" bg-curve-plain flex flex-col sm:flex-col h-full py-10 px-5 justify-center items-center gap-20  ">
        <h1 class="text-6xl font-ubuntu text-white text-center" >Service We Provide For You</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-14 gap-y-7">
          <article class="lg:w-[394px] h-[300px] border border-white rounded flex flex-col items-center justify-around px-10 py-4 hover:translate-x-1 hover:translate-y-1 transition-all cdcd" >
            <div class="top text-center flex flex-col justify-center items-center gap-3 ">
              <img src="~/assets/development-service.png" alt="">
              <h3 class="text-white text-2xl font-ubuntu-regular " >Development</h3>
            </div>
            <div class="bottom text-center ">
              <p class="text-lg text-white text-center">

                Create a platform with the best and coolest quality from us
              </p>
            </div>
          </article>
          <article class="lg:w-[394px] bg-white h-[300px] border border-white rounded flex flex-col items-center justify-around px-10 py-4 hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-inherit hover:text-white " >
            <div class="top text-center flex flex-col justify-center items-center gap-3 ">
              <img src="~/assets/ui-ux-service.png" alt="">
              <h3 class=" text-2xl font-ubuntu-regular " >UI/UX Designer  </h3>
            </div>
            <div class="bottom text-center ">
              <p class="text-lg  text-center">

                Create a platform with the best and coolest quality from us
              </p>
            </div>
          </article>
          <article class="lg:w-[394px] bg-white h-[300px] border border-white rounded flex flex-col items-center justify-around px-10 py-4 hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-inherit hover:text-white " >
            <div class="top text-center flex flex-col justify-center items-center gap-3 ">
              <img src="~/assets/graphik-design-service.png" alt="">
              <h3 class=" text-2xl font-ubuntu-regular " >Graphik Designer</h3>
            </div>
            <div class="bottom text-center ">
              <p class="text-lg  text-center">

                Create a platform with the best and coolest quality from us
              </p>
            </div>
          </article>
          <article class="lg:w-[394px] bg-white h-[300px] border border-white rounded flex flex-col items-center justify-around px-10 py-4 hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-inherit hover:text-white " >
            <div class="top text-center flex flex-col justify-center items-center gap-3 ">
              <img src="~/assets/motion-graphik-service.png" alt="">
              <h3 class=" text-2xl font-ubuntu-regular " >Motion Graphic</h3>
            </div>
            <div class="bottom text-center ">
              <p class="text-lg  text-center">

                Create a platform with the best and coolest quality from us
              </p>
            </div>
          </article>
          <article class="lg:w-[394px] bg-white h-[300px] border border-white rounded flex flex-col items-center justify-around px-10 py-4 hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-inherit hover:text-white " >
            <div class="top text-center flex flex-col justify-center items-center gap-3 ">
              <img src="~/assets/photography-service.png" alt="">
              <h3 class=" text-2xl font-ubuntu-regular " >Photography</h3>
            </div>
            <div class="bottom text-center ">
              <p class="text-lg  text-center">

                Create a platform with the best and coolest quality from us
              </p>
            </div>
          </article>
          <article class="lg:w-[394px] bg-white h-[300px] border border-white rounded flex flex-col items-center justify-around px-10 py-4 hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-inherit hover:text-white " >
            <div class="top text-center flex flex-col justify-center items-center gap-3 ">
              <img src="~/assets/videography-service.png" alt="">
              <h3 class=" text-2xl font-ubuntu-regular " >Videography</h3>
            </div>
            <div class="bottom text-center ">
              <p class="text-lg  text-center">

                Create a platform with the best and coolest quality from us
              </p>
            </div>
          </article>
        </div>

      </section>

      <!-- Images section -->
      <section class="my-20 text-center flex flex-col justify-center items-center gap-32 px-1 " >
        <h2 class="text-4xl font-ubuntu sm:w-[1200px] " >Exploring Our Extensive Portfolio of Successful Compaigns and Measurable Results</h2>
        <div class="flex flex-col md:flex-row gap-5 justify-center items-center">
          <div class="flex flex-col gap-2 ">
            <img src="~/assets/success1.png" alt="">
            <img src="~/assets/success2.png" alt="">
            <img src="~/assets/success3.png" alt="">
          </div>
          <div class="flex flex-col gap-2 ">
            <img src="~/assets/success4.png" alt="">
            <img src="~/assets/success5.png" alt="">
            <img src="~/assets/success6.png" alt="">
            <img src="~/assets/success7.png" alt="">
          </div>
          <div class="flex flex-col gap-2 ">
            <img src="~/assets/success8.png" alt="">
            <img src="~/assets/success9.png" alt="">
            <img src="~/assets/success10.png" alt="">
          </div>
          
        </div>
      </section>

      <Form/>
    </main>
    <Footer  class="mt-72"/>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Branding & Design | EMT',
  meta: [
    {name: 'description', content: 'The best branding and design service'}
  ]
})


</script>

<style scoped>

@media only screen and (max-width: 750px) {
    
    .bg-curve-plain {
        background-image: none;
        background-color: rgb(106, 13, 13);
        height: max-content;
    }
    .header-bg-small {
        background-image: url('/banner_back.svg');
        background-position: 0 0;
        /* width: 200px;  */
        height: 1240px;
        background-repeat: no-repeat;
    
    }
}

textarea{
  resize: none;
}
</style>