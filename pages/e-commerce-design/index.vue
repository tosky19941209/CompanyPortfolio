<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg-small">
      <Navbar class=" mt-50 mb-4 sm:mb-16" />
      <div class="content flex  flex-col lg:flex-row sm:justify-between sm:items-center gap-32 mx-20 my-10 sm:my-20">

        <section class="left md:w-[699px] flex flex-col sm:gap-13 gap-7 text-center  sm:text-start mb-5">
          <h1 class="text-white text-5xl font-ubuntu text-center  ">ECOMMERCE WEB DESIGN</h1>
          <p class="roboto-regular text-white text-xl">If the path is beautiful, let us not ask where it
            leads. my religion is very simple. my religion is kindness. each of us has within our power the
            ability to disrupt</p>
        </section>
        <section class="right sm:mr-20 sm:mt-7">
          <img src="~/assets/e-commerce-dev-header.png" alt="" class="lg:w-[500]" >
        </section>

      </div>
    </header>
    <main>
      <Packages />

      <!-- Our Speciality Section -->
      <section class="  bg-curved h-[1484px] flex flex-col justify-center items-center gap-12 px-7  py-20 ">
        <h1 class="text-white font-ubuntu text-4xl">Our Speciality</h1>
        <div class="grid grid-cols-1 xl:grid-cols-2  gap-x-10 gap-y-7  ">
          <div
            class="box bg-white flex gap-5 sm:w-[604px] sm:h-[237px] px-5 py-8 rounded hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
            <div class="img my-6">
              <div class="img-inside p-3 w-10 rounded-lg bg-gradient-to-tr from-black to-red-900 ">

                <img src="~/assets/Rocket_perspective_matte.png" width="100" alt="">
              </div>
            </div>
            <div class="content flex flex-col justify-evenly">
              <h3 class="text-2xl font-ubuntu-regular">UX Driven Engineering</h3>
              <p class="inter-thin text-lg">Unlike other companies, we are a UX first development company. Projects are
                driven by designers and they make sure design and experiences translate to code.</p>
            </div>
          </div>
          <div
            class="box bg-white flex gap-5 sm:w-[604px] sm:h-[237px] px-5 py-8 rounded hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
            <div class="img my-6">
              <div class="img-inside p-3 w-10 rounded-lg bg-gradient-to-tr from-black to-red-900 ">

                <img src="~/assets/Code_perspective_matte.png" width="100" alt="">
              </div>
            </div>
            <div class="content flex flex-col justify-evenly">
              <h3 class="text-2xl font-ubuntu-regular">Developing Shared Understanding</h3>
              <p class="inter-thin text-lg">Unlike other companies, we are a UX first development company. Projects are
                driven by designers and they make sure design and experiences translate to code.</p>
            </div>
          </div>
          <div
            class="box bg-white flex gap-5 sm:w-[604px] sm:h-[237px] px-5 py-8 rounded hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
            <div class="img my-6">
              <div class="img-inside p-3 w-10 rounded-lg bg-gradient-to-tr from-black to-red-900 ">

                <img src="~/assets/Heart_rate_perspective_matte.png" width="100" alt="">
              </div>
            </div>
            <div class="content flex flex-col justify-evenly">
              <h3 class="text-2xl font-ubuntu-regular">Proven Experience and Exprtise</h3>
              <p class="inter-thin text-lg">Unlike other companies, we are a UX first development company. Projects are
                driven by designers and they make sure design and experiences translate to code.</p>
            </div>
          </div>
          <div
            class="box bg-white flex gap-5 sm:w-[604px] sm:h-[237px] px-5 py-8 rounded hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
            <div class="img my-6">
              <div class="img-inside p-3 w-10 rounded-lg bg-gradient-to-tr from-black to-red-900 ">

                <img src="~/assets/Shield_perspective_matte.png" width="100" alt="">
              </div>
            </div>
            <div class="content flex flex-col justify-evenly">
              <h3 class="text-2xl font-ubuntu-regular">Security & Intellectual Property</h3>
              <p class="inter-thin text-lg">Unlike other companies, we are a UX first development company. Projects are
                driven by designers and they make sure design and experiences translate to code.</p>
            </div>
          </div>
          <div
            class="box bg-white flex gap-5 sm:w-[604px] sm:h-[237px] px-5 py-8 rounded hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
            <div class="img my-6">
              <div class="img-inside p-3 w-10 rounded-lg bg-gradient-to-tr from-black to-red-900 ">

                <img src="~/assets/Success_perspective_matte.png" width="100" alt="">
              </div>
            </div>
            <div class="content flex flex-col justify-evenly">
              <h3 class="text-2xl font-ubuntu-regular">Code Reviews</h3>
              <p class="inter-thin text-lg">Unlike other companies, we are a UX first development company. Projects are
                driven by designers and they make sure design and experiences translate to code.</p>
            </div>
          </div>
          <div
            class="box bg-white flex gap-5 sm:w-[604px] sm:h-[237px] px-5 py-8 rounded hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
            <div class="img my-6">
              <div class="img-inside p-3 w-10 rounded-lg bg-gradient-to-tr from-black to-red-900 ">

                <img src="~/assets/Padlock_perspective_matte.png" width="100" alt="">
              </div>
            </div>
            <div class="content flex flex-col justify-evenly">
              <h3 class="text-2xl font-ubuntu-regular">Quality Assurance & Testing</h3>
              <p class="inter-thin text-lg">Unlike other companies, we are a UX first development company. Projects are
                driven by designers and they make sure design and experiences translate to code.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our working approach section -->
      <section class="flex flex-col gap-20 py-20 ">
        <h1 class="text-5xl font-ubuntu text-center">Our Working Approach</h1>
        <div class="flex justify-around">
          <div>

            <img src="~/assets/left-arrow.png" class="hidden md:block" width="300" alt="">
          </div>
          <img src="~/assets/development-procedure.png" class="hidden md:block" alt="">
          <img src="~/assets/working-approach-mobile.png" class="block md:hidden" alt="">
          <div>

            <img src="assets/right-arrow.png" class="hidden md:block" alt="">
          </div>
        </div>
      </section>

      <!-- Our Recent Case Studies Section -->
      <section class="flex flex-col justify-center items-center my-20 gap-5">
        <h1 class="text-4xl font-ubuntu">Our Recent Case Studies</h1>
        <div class="case-studies flex flex-col gap-7">
          <div class="card1 mx-1 flex flex-col xl:flex-row bg-purple-100 xl:w-[1232px]  rounded-l-xl rounded-r-2xl">
            <img src="~/assets/case-study-1.png" alt="" class="w-full md:w-auto">
            <div class="text-content px-10 py-14 flex flex-col gap-12">
              <h3 class="font-ubuntu-regular text-2xl">Website Design For SCFC Canada</h3>
              <p class="roboto-regular text-lg">Born out of a vision, a single-minded objective that puts service before
                anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the
                shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management
                boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
              </p>
              <h5 class="text-red-900 inter-bold text-end">Read More > </h5>
            </div>
          </div>
          <div class="card2 mx-1 flex flex-col xl:flex-row bg-green-100 xl:w-[1232px]  rounded-l-xl rounded-r-2xl">
            <img src="~/assets/case-study-2.png" alt="" class="w-full md:w-auto">
            <div class="text-content px-10 py-14 flex flex-col gap-12">
              <h3 class="font-ubuntu-regular text-2xl">Website Design For SCFC Canada</h3>
              <p class="roboto-regular text-lg">Born out of a vision, a single-minded objective that puts service before
                anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the
                shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management
                boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
              </p>
              <h5 class="text-red-900 inter-bold text-end">Read More > </h5>
            </div>
          </div>
          <div class="card3 mx-1 flex flex-col xl:flex-row bg-red-100 xl:w-[1232px]  rounded-l-xl rounded-r-2xl">
            <img src="~/assets/case-study-3.png" alt="" class="w-full md:w-auto">
            <div class="text-content px-10 py-14 flex flex-col gap-12">
              <h3 class="font-ubuntu-regular text-2xl">Website Design For SCFC Canada</h3>
              <p class="roboto-regular text-lg">Born out of a vision, a single-minded objective that puts service before
                anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the
                shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management
                boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
              </p>
              <h5 class="text-red-900 inter-bold text-end">Read More > </h5>
            </div>
          </div>
        </div>
        <h6 class="text-lg text-red-900 font-ubuntu-regular">Read More Case Studies &nbsp;&nbsp;&nbsp;&nbsp; -></h6>
      </section>

      <Form />

      <section class="flex flex-col justify-center items-center gap-20 mt-96  ">
        <h1 class="text-4xl font-ubuntu">Platform We Use</h1>
        <nav>
          <ul class="grid grid-cols-3 gap-x-7 gap-y-4 md:flex md:gap-16 text-xl font-ubuntu-regular">
            <li class="text-red-900">Backend</li>
            <li class="hover:text-red-900 cursor-pointer">Frontend</li>
            <li class="hover:text-red-900 cursor-pointer">Databases</li>
            <li class="hover:text-red-900 cursor-pointer">CMS</li>
            <li class="hover:text-red-900 cursor-pointer">Cloud Testing</li>
            <li class="hover:text-red-900 cursor-pointer">DevOps</li>
          </ul>
        </nav>
        <div class="backend">
          <img src="~/assets/backend.png" alt="">
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Ecommerce Design | EMT',
  meta: [
    {name: 'description', content: 'The best E commerce design service'}
  ]
})
</script>

<style scoped>
@media only screen and (max-width: 1050px) {
    .header-bg-small {
        background-image: url('/banner_back.svg');
        background-position: 0 0;
        /* width: 200px;  */
        height: 1240px;
        background-repeat: no-repeat;
    
    }
}
@media only screen and (max-width: 1280px) {
    .bg-curved {
      background-image: none;
        background-color: rgb(106, 13, 13);
        height: max-content;
    
    }
}
</style>