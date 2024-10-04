<template>
  <div class="w-full overflow-x-hidden">

    <header class="h-[1200px] w-full pt-2 header-bg">
      <Navbar />
      <div class="content flex flex-col lg:flex-row  lg:my-32 gap-2  lg:justify-between xl:mx-16">
        <!-- Left div -->
        <section
          class="text-div flex flex-col lg:w-[40rem] justify-center   gap-10 lg:gap-5 items-center lg:mx-16 self-center my-10 lg:my-44 text-white">
          <p class="text-5xl lg:text-6xl text-center lg:text-start font-ubuntu">Grow your <span class="ubuntu-medium-italic" id="brand-business"></span> through digital</p>

          <p class="roboto-regular text-xl text-justify hidden lg:block ">If the path is beautiful, let us not ask where it leads. My
            religion is very
            simple. My religion is kindness. Each of us has within our power the ability to disrupt.</p>
          <img src="~/assets/button.svg" alt="Download Button" class=" cursor-pointer mr-0 lg:mr-48 my-6 hover:translate-x-1 transition-all duration-300" width="192">
          <p class="mr-48 font-ubuntu hidden lg:block">DOWNLOAD OUR APP</p>
          <div class="hidden gap-3   lg:flex ">
            <img src="~/assets/appstore.svg" alt="Download from App Store" class="cursor-pointer hover:translate-x-1 transition-all duration-300" width="180">
            <img src="~/assets/playstore.svg" alt="Download from Play Store" class="cursor-pointer hover:translate-x-1 transition-all duration-300" width="180">
          </div>
        </section>

        <!-- Right div -->
        <section class="app-div  flex items-start gap-0 self-center ml-10 lg:ml-4 lg:mr-48 ">
          <div class="side-div bg-[#a83939] h-72 lg:h-[450px] w-4  lg:w-6 mt-36 rounded-l-md"></div>
          <img src="~/assets/app.png" alt="App Screenshot" width="" class="mt-8 rounded-md w-56 lg:w-[280px]">
        </section>

      </div>
    </header>

    <main class="mt-96">
      <!-- About us section -->
      <section class=" mx-2 my-1">
        <div class="  flex flex-col lg:flex-row lg:justify-around gap-5 justify-center items-center w-full mb-10">

          <img src="~/assets/our-story2.png"  alt="">

          <article class="sm:w-[481px] self-start flex flex-col gap-5 my-5">
            <h3 class="text-red-950 mx-3 text-3xl">About Us</h3>
            <h2 class="text-5xl">Our story</h2>
            <div class="text flex flex-col gap-3">

              <p class="roboto-regular font-thin text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <ul class="flex flex-col gap-2">
                <li class="flex items-center roboto-regular font-thin text-gray-700">
                  <img src="~/assets/tick.svg" alt="" class="mr-4">
                  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.
                </li>
                <li class="flex items-center roboto-regular font-thin text-gray-700">
                  <img src="~/assets/tick.svg" alt="" class="mr-4">
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the
                  digital.
                </li>
              </ul>
            </div>
          </article>
        </div>
        <Brands />
      </section>
      <!-- Why choose us section -->
      <WhyChoose/>
      <!-- Our services section -->
      <Services/>

      <!-- form sction -->
      <Form />


      <!-- Case studies section -->
      <section class="flex flex-col justify-center items-center gap-10">
        <div class="flex flex-col gap-6 text-center mx-2 sm:w-1/4 mt-80">

          <h3 class="text-2xl text-red-900 font-ubuntu-thin">Case studies</h3>
          <h2 class="text-4xl font-ubuntu">Our works describe why we are the best in the buisness</h2>
        </div>
        <div class="works sm:flex gap-20 mb-20">
          <div class="left flex flex-col gap-10 sm:gap-4">

            <div class="work 1 flex flex-col gap-5">
              <img src="~/assets/caseStudies1.png" width="360" alt="">
              <div class="text">

                <h3 class="text-xl text-red-900 font-ubuntu-thin">Graphic Design</h3>
                <h2 class="font-ubuntu text-2xl">Aura brand Design</h2>
              </div>
            </div>
            <div class="work 3 flex flex-col gap-5">
              <img src="~/assets/caseStudies3.png" width="360" alt="">
              <div class="text">

                <h3 class="text-xl text-red-900 font-ubuntu-thin">Graphic Design</h3>
                <h2 class="font-ubuntu text-2xl">Aura brand Design</h2>
              </div>
            </div>
          </div>
          <div class="right flex flex-col gap-10 sm:gap-4">

            <div class="work 2 flex flex-col gap-5">
              <img src="~/assets/caseStudies2.jpg" width="360" alt="">
              <div class="text">

                <h3 class="text-xl text-red-900 font-ubuntu-thin">Graphic Design</h3>
                <h2 class="font-ubuntu text-2xl">Aura brand Design</h2>
              </div>
            </div>

            <div class="work 4 flex flex-col gap-5">
              <img src="~/assets/caseStudies4.png" width="360" alt="">
              <div class="text">

                <h3 class="text-xl text-red-900 font-ubuntu-thin">Graphic Design</h3>
                <h2 class="font-ubuntu text-2xl">Aura brand Design</h2>
              </div>
            </div>
          </div>

        </div>
        <a href="/"><h4 class="hover:underline transition-all cursor-pointer" >See all works</h4></a>
      </section>

      <!-- News section -->
      <section class="hidden  bg-curved h-[1484px] md:flex flex-col">
        <div class="in mx-8 flex flex-col gap-5">

          <h1 class="text-3xl text-white font-ubuntu mt-96 ml-96">Latest news</h1>
          <div class="flex justify-center gap-28">
            <div class="left w-[543px] flex flex-col gap-6">
              <img src="~/assets/news1.png" alt="">
              <h3 class="text-white inter-regular font-ubuntu">WEBSITE DESIGN | THURSDAY, 26 MARCH 2020</h3>
              <h2 class="text-white font-ubuntu text-2xl ">I think night time is dark so you can imagine with less
                distraction</h2>
              <p class="text-white my-2 roboto-regular"> The engine that gives its mysterious inner life to a work of
                art must be the subterranean expression of a wish, working its way to the surface of a narrative. change
                is an easy panacea. it takes character to stay in one…</p>

            </div>
            <div class="right  hidden lg:flex flex-col gap-5">
              <div class="news1 flex gap-4 w-[448px] h-[163px] text-white">
                <img src="~/assets/news2.png" alt="">
                <div class="flex flex-col gap-7">
                  <h3 class="text-lg source-sans-pro">WEBSITE DEVELOPMENT</h3>
                  <h2 class="text-xl font-ubuntu-thin">The individual is born of nature, but the artist is born of that
                    individual</h2>
                </div>
              </div>
              <div class="news1 flex gap-4 w-[448px] h-[163px] text-white">
                <img src="~/assets/news3.png" alt="">
                <div class="flex flex-col gap-7">
                  <h3 class="text-lg source-sans-pro">BRAND DESIGN</h3>
                  <h2 class="text-xl font-ubuntu-thin">A life without it is like a sunless garden when the flowers are
                    dead</h2>
                </div>
              </div>
              <div class="news1 flex gap-4 w-[448px] h-[163px] text-white">
                <img src="~/assets/news4.png" alt="">
                <div class="flex flex-col gap-7">
                  <h3 class="text-lg source-sans-pro">UI UX DESIGN</h3>
                  <h2 class="text-xl font-ubuntu-thin">All sorrows can be borne if they can be put into a story</h2>
                </div>
              </div>
              <div class="news1 flex gap-4 w-[448px] h-[163px] text-white">
                <img src="~/assets/news5.png" alt="">
                <div class="flex flex-col gap-7">
                  <h3 class="text-lg source-sans-pro">BRAND DESIGN</h3>
                  <h2 class="text-xl font-ubuntu-thin">Love is friendship set on fire. certain thoughts are prayers</h2>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>



      <!-- People section -->
      <People />




    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup >
import WhyChoose from '~/components/WhyChoose.vue';

useHead({
  title: ' Home | EMT',
  meta: [
    {name: 'description', content: 'The best website maintenance, ecommerce, digital marketing service'}
  ]
})
</script>

<style scoped>
/* Import Ubuntu font */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

/* Import Roboto font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* Import roboto serif */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');

/* Import inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

/* Import lato */
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');


/* Import Source sans pro */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

.header-bg {
  background-image: url('/banner_back.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  display: flex;
  align-items: flex-start;
}



.side-div {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0.395rem;
  /* Equivalent to rounded-md */
  border-bottom-left-radius: 0.395rem;
  /* Equivalent to rounded-md */
}

.font-ubuntu {
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
}

.font-ubuntu-thin {
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
}

.ubuntu-medium-italic {
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.roboto-heavy {
  font-family: "Roboto", sans-serif;
  font-weight: 800;
}

.roboto-serif-heavy {
  font-family: "Roboto Serif", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "GRAD" 0;
}

.inter-regular {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
}

.source-sans-pro {
  font-family: "Source Sans 3", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}


.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}


.bg-Background {
  background-image: url('/Background.png');
}

.bg-footer {
  background-image: url('/footer-bg.png');
  filter: grayscale(1px);
}

.bg-curved {
    background-image: url('/wave.svg'), url('/bg-curve.png');
    background-repeat: no-repeat;
    background-size: cover; /* or contain, or specific dimensions */
    background-position: center center; /* or other appropriate position */
}


#brand-business::before {
  content: "brand";
  animation: animate 12s infinite; /* Adjust the animation duration */
  opacity: 0; /* Start with opacity 0 */
}

@keyframes animate {
  0%, 8.33% {
    opacity: 0;
  }
  8.33%, 25% {
    content: "brand";
    opacity: 1;
  }
  25%, 33.33% {
    content: "brand";
    opacity: 0;
  }
  33.33%, 41.66% {
    content: "business";
    opacity: 1;
  }
  41.66%, 58.33% {
    opacity: 0;
  }
  58.33%, 66.66% {
    content: "business";
    opacity: 1;
  }
  66.66%, 74.99% {
    content: "sales";
    opacity: 0;
  }
  74.99%, 100% {
    opacity: 1;
  }
}










</style>
