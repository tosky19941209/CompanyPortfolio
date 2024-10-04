<template>
  <div>
    <header class="h-[1200px] w-full pt-2 header-bg-small">
      <Navbar class=" mt-50 mb-10 lg:mb-16" />
      <div class="content flex  flex-col lg:flex-row lg:justify-between lg:items-center gap-28 mx-20 lg:my-2">

        <section class="left lg:w-[500px] flex flex-col lg:gap-10 gap-6 text-center lg:text-start mb-5">
          <h1 class="text-white text-5xl font-ubuntu  ">Corporate Website Design Services</h1>
          <p class="roboto-regular text-white text-xl">If the path is beautiful, let us not ask where it
            leads. my religion is very simple. my religion is kindness. each of us has within our power the
            ability to disrupt</p>
        </section>
        <section class="right lg:mr-20 lg:mt-20">
          <img src="~/assets/website-design-header.png" alt="" width="600">
        </section>

      </div>
    </header>

    <main>
      <!-- Find Our packages -->
      <section class="flex flex-col justify-center items-center my-40 ">
        <h1 class="font-ubuntu text-4xl text-center">Find Our Packages</h1>
        <Packages />
      </section>

      <!-- Our Working Process Section -->
      <section class="flex flex-col gap-10 px-2">
        <h1 class="font-ubuntu text-4xl text-center">Our Working Process</h1>
        <div class="flex flex-col lg:flex-row text-center gap-20 justify-around  ">
          <div class="flex flex-col justify-evenly  ">
            <h4 class="urbanist-light text-lg">Step 01</h4>
            <h2 class="font-ubuntu text-xl text-red-900">Get Started</h2>

          </div>
          <article class="lg:w-[920px] flex flex-col gap-4 ">
            <p class=" roboto-regular text-lg ">Starting with create a coming soon page for your website</p>
            <p class=" roboto-regular text-lg "> <span class="text-red-800">Why?</span> Because It builds anticipation:
              A coming soon page generates buzz and excitement about your website before it even launches. This can be
              particularly helpful for new businesses or startups that want to generate interest and curiosity around
              their brand.</p>
            <hr class="bg-black h-[1.5px]">
          </article>
        </div>
        <div class="flex flex-col lg:flex-row text-center gap-20 justify-around  ">
          <div class="flex flex-col justify-evenly  ">
            <h4 class="urbanist-light text-lg">Step 02</h4>
            <h2 class="font-ubuntu text-xl text-red-900">Planning</h2>

          </div>
          <article class="sm:w-[920px] flex flex-col gap-4 ">
            <p class=" roboto-regular text-lg ">At Begin by defining the goals and objectives of the website. This
              includes understanding the target audience, identifying the key features and functionality required, and
              establishing a timeline for the project. </p>
            <p class=" roboto-regular text-lg "> Develop a detailed plan for the project, including the site
              architecture, wireframes, and design concept with should also include a content strategy and a plan for
              search engine optimization</p>
            <hr class="bg-black h-[2px]">
          </article>
        </div>
        <div class="flex flex-col lg:flex-row text-center gap-20 justify-around  ">
          <div class="flex flex-col gap-5  ">
            <h4 class="urbanist-light text-lg">Step 03</h4>
            <h2 class="font-ubuntu text-xl text-red-900">Design</h2>

          </div>
          <article class="sm:w-[920px] flex flex-col gap-4 ">
            <p class=" roboto-regular text-lg "> <span class="text-red-800">Identify branding elements:</span> The first
              step in creating the visual design of a website is to identify the client's branding elements. This
              includes their logo, color palette, typography, and any other design elements that are part of your brand
              identity. </p>
            <p class=" roboto-regular text-lg "> <span class="text-red-800">Choose imagery:</span> It's important to
              choose images that are high-quality, relevant to the content, and consistent with the brand identity. This
              can include photographs, illustrations, icons, and other graphic elements. </p>
            <p class=" roboto-regular text-lg "> <span class="text-red-800">Create a design concept:</span> That aligns
              with the your goals and objectives. This involves creating a mockup or prototype of the website that
              incorporates these elements and establishes a visual hierarchy for the content. </p>
            <p class=" roboto-regular text-lg "> <span class="text-red-800">Refine the design:</span> After the initial
              design concept has been created, we will take a feedback from you. and we are ready to making some
              adjustments (if needed) to the layout, color scheme, typography, or imagery to better align with your
              goals and objectives </p>

            <hr class="bg-black h-[2px]">
          </article>
        </div>
        <div class="flex flex-col lg:flex-row text-center gap-20 justify-around  ">
          <div class="flex flex-col justify-evenly  ">
            <h4 class="urbanist-light text-lg">Step 04</h4>
            <h2 class="font-ubuntu text-xl text-red-900">Planning</h2>

          </div>
          <article class="sm:w-[920px] flex flex-col gap-4 ">
            <p class=" roboto-regular text-lg ">We will present a fully design demo website with mobile responsive
              design and it will iterate to get the visual right. After design approval we will develop the website.
            </p>
            <p class=" roboto-regular text-lg "> I will use platform like, Wordpress, Webflow, Elementor, and Shopify to
              develop the website complete with a CMS (content management system) that will allow you to edit/manage
              your website’s content without the need for a developer.</p>
            <hr class="bg-black h-[2px]">
          </article>
        </div>
        <div class="flex flex-col lg:flex-row text-center gap-20 justify-around  ">
          <div class="flex flex-col justify-evenly  ">
            <h4 class="urbanist-light text-lg">Step 05</h4>
            <h2 class="font-ubuntu text-xl text-red-900">Launching</h2>

          </div>
          <article class="sm:w-[920px] flex flex-col gap-4 ">
            <p class=" roboto-regular text-lg ">Testing: Conduct thorough testing of the website, including functional
              testing, user testing, and performance testing. This ensures that the website works as intended and meets
              user expectations.
            </p>
            <p class=" roboto-regular text-lg "> Launch: Once the website has been thoroughly tested and approved,
              launch it to the public. This includes setting up hosting, domain registration, and any necessary DNS
              settings.</p>
            <hr class="bg-black h-[1.5px]">
          </article>
        </div>

      </section>
      <!-- Quote form section -->
      <div class="mb-72">

        <Form />
      </div>

      <section class="flex flex-col justify-start items-start mx-5">
        <div class="self-center flex flex-col gap-7">

          <h1 class="text-4xl lg:w-[870px] text-center  font-ubuntu">Discover my skills and creativity in action, with just one click.
          </h1>
          <div class=" grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-12">

            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-1.png" width="" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-2.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-3.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-4.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-1.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-2.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-3.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="~/assets/creativity-4.png" alt="">
              <div class="flex justify-between">
                <div class="landing-page border rounded-full text-[#7e7c7c] py-1 px-4 ">Landing Page</div>
                <div class="ui-ux border rounded-full text-[#7e7c7c] py-1 px-4 ">UI & UX</div>
                <div class="view-project border rounded-full text-[#7e7c7c] py-1 px-4 ">View Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Website Design | EMT',
  meta: [
    {name: 'description', content: 'The best website design service'}
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
</style>