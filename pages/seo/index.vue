<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg sm:header-bg-small mb-20">
      <Navbar />
      <div class="content flex flex-col sm:flex-row justify-between items-end my-10 mr-28 gap-">
        <!-- Left div -->
        <section class="text-div flex flex-col w-full sm:w-96 text-center justify-center gap-5 items-center mx-16 mt10 sm:mt-36 text-white">
          <p class="text-5xl text-pretty font-ubuntu-regular sm:font-ubuntu">SEO & Digital Marketing Services</p>
          <p class="roboto-regular text-lg text-justify">If the path is beautiful, let us not ask where it leads. My religion is very
            simple. My religion is kindness. Each of us has within our power the ability to disrupt.</p>

        </section>

        <!-- Right div -->
        <section class=" mr-10 flex flex-col justify-center items-center ">

          <img src="~/assets/seo-header.png" alt="App Screenshot" width="" class="mt-36 sm:ml-44 ml-32 rounded-md w-[700px] sm:w-[550px]" >
        </section>
        </div>
    </header>
    <!-- Our achievements section -->
    <Achievements />
    <main>
      <!-- Why choose section -->
      <section class="flex flex-col gap-8 sm:flex-row mx-3 justify-evenly my-36  " >
        <div class="img" >
          <img src="~/assets/why-choose-seo.png" alt="" width="" >
        </div>
        <div class="lg:w-[457px] flex flex-col gap-7 self-center " >
          <h1 class="cabin-heavy text-4xl text-center " >Why Choose Our SEO & Digital Marketing Serivce</h1>
          <article class="flex gap-3" >
            <div class="img  my-2" >
              <img src="~/assets/whyChooseSEO1.png" width="50" alt="">
            </div>
            <div class="flex flex-col gap-2" >
              <h1 class="cabin-regular text-xl" >Banking and finance</h1>
              <p class="lato-regular text-gray-700 text-lg" >Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
            </div>
          </article>
          <article class="flex gap-3" >
            <div class="img  my-2" >
              <img src="~/assets/whyChooseSEO2.png" width="50" alt="">
            </div>
            <div class="flex flex-col gap-2" >
              <h1 class="cabin-regular text-xl  " >Logistic and Transportation</h1>
              <p class="lato-regular text-gray-700 text-lg" >Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
            </div>
          </article>
          <article class="flex gap-3" >
            <div class="img  my-2" >
              <img src="~/assets/whyChooseSEO3.png" width="50" alt="">
            </div>
            <div class="flex flex-col gap-2" >
              <h1 class="cabin-regular text-xl" >Trading</h1>
              <p class="lato-regular text-gray-700 text-lg" >Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
            </div>
          </article>

        </div>
      </section>

      <!-- Full service digitl marketing agency section -->
      <section class="flex flex-col justify-center items-center text-center py-10 gap-7 ">


          <h1 class="font-ubuntu text-4xl" >Full Service Digital Marketing Agency</h1>
          <p class="sm:w-[826px] roboto-regular text-gray-900 mx-2 text-justify  " >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praes</p>
          <div class="cards grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-7  ">
            <ServiceCard  image="services1.png" title="Digital PR Link Building" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services2.png" title="Link building and content" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services3.png" title="Maps Search Optimization" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services4.png" title="Big Data Analysis" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services5.png" title="Custom Email Design" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services6.png" title="Moitoring Ranking" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services7.png" title="Code Optimization" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
            <ServiceCard  image="services8.png" title="Nap Syndication" text="Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
          </div>

      </section>

      <!-- Our working process section -->

      <section class=" bg-curve-plain flex flex-col md:flex-row justify-center items-center px-2 py-20 ">


          <div class=" left flex flex-col justify-start gap-36 ">
  
            <h1 class="text-white text-5xl font-ubuntu text-center "  >Our Working Process</h1>
            <div class="boxes md:w-[440px] flex flex-col gap-5 ">
              <div class="box bg-white px-4 py-6 rounded-2xl flex gap-4 ">
                <div class="image">
                  <img src="~/assets/process1.png" width="90px"  alt="">
                </div>
                <div class="text questrial-regular text-xl">
                  Search Engine Optimization (SEO), experts optimize  and improve its visibility in search engine results
                </div>
              </div>
              <div class="box bg-white px-4 py-6 rounded-2xl flex gap-4 ">
                <div class="image">
                  <img src="~/assets/process2.png" width="90px"  alt="">
                </div>
                <div class="text questrial-regular text-xl">
                  Targeted Advertising,  data-driven insights and advanced targeting techniques to reach your ideal audience.
                </div>
              </div>
            </div>
          </div>
          <div class="sm:relative flex flex-col md:flex-row gap-6 justify-between">

            <div class="mid mr-20 " >
              <img src="~/assets/Group.png" alt="">
            </div>
            <div class="right md:absolute left-[400px]">
              <div class="boxes md:w-[440px] flex flex-col gap-5 ">
                <div class="box bg-white px-4 py-6 rounded-2xl flex gap-4 ">
                  <div class="image">
                    <img src="~/assets/process1.png" width="90px"  alt="">
                  </div>
                  <div class="text questrial-regular text-xl">
                    Search Engine Optimization (SEO), experts optimize  and improve its visibility in search engine results
                  </div>
                </div>
                <div class="box bg-white px-4 py-6 rounded-2xl flex gap-4 ">
                  <div class="image">
                    <img src="~/assets/process2.png" width="90px"  alt="">
                  </div>
                  <div class="text questrial-regular text-xl">
                    Search Engine Optimization (SEO), experts optimize  and improve its visibility in search engine results
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>

      <!-- Seo analysis formm -->
      <div class="flex justify-center items-center my-36" >

        <section class="w-[735px] border-[1px] border-black rounded-xl mx-1  ">
          <div class="text-center bg-red-900 text-white rounded-t-xl py-4 px-4 flex flex-col gap-2 "   >
            <h1 class="font-ubuntu text-3xl" >Want a free analysis report?</h1>
            <h4 class="roboto-regular text-lg">Fill the form below</h4>
          </div>
          <form action="" class="flex flex-col py-12 gap-5 px-6" >
            <input type="text"  placeholder="Your name*" class="border border-gray-800 py-3 px-6 outline-red-600 rounded-xl placeholder:text-black ">
            <input type="email" placeholder="Email"  class="border border-gray-800 py-3 px-6 outline-red-600 rounded-xl placeholder:text-black " >
            <input type="text" placeholder="Your Website URL" class="border border-gray-800 py-3 px-6 outline-red-600 rounded-xl placeholder:text-black "  >
            <input type="text" placeholder="Company Name"  class="border border-gray-800 py-3 px-6 outline-red-600 rounded-xl placeholder:text-black "  >
            <button type="submit" class=" bg-red-900 border border-black text-white py-5 rounded-3xl hover:bg-red-950 transition-all  hover:translate-y-2 ">GET YOUR REPORT</button>
          </form>
          <div class="text-center font-ubuntu-xthin text-lg mb-7 "  > 

            <h4>We'll get back to you withing 24 hours*</h4>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>

useHead({
  title: 'SEO | EMT',
  meta: [
    {name: 'description', content: 'The best seo service'}
  ]
})

</script>

<style>
/* .bg-curve-plain{
  background-image: url('/bg-curve.png');
  height: 1856px;
  
} */
</style>