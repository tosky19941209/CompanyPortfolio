<template>
    <div>
      <footer class="bg-gray-100 h-auto md:flex flex-col justify-between gap-6 py-3 items-center slanted-footer">
        <div class="top flex flex-col md:flex-row py-32 gap-5 justify-around w-full">
          <div class="logo self-center md:block flex flex-col justify-center items-center gap-5">
            <img src="~/assets/emtech.png" class="w-[150px] md:w-[100px] sm:w-[200px]" alt="">
            <div class="flex md:hidden social-media gap-4">
              <img src="~/assets/facebook-footer.png" alt="">
              <img src="~/assets/insta-footer.png" alt="">
              <img src="~/assets/linkedin-footer.png" alt="">
            </div>
          </div>
          <div class="pages flex flex-col gap-2 mx-3">
            <h3 class="font-ubuntu-regular text-lg">Pages</h3>
            <ul class="flex flex-col gap-1">
               <NuxtLink to="/"> <li>Home</li></NuxtLink>
               <NuxtLink to="/about"> <li>About</li></NuxtLink>
               <NuxtLink to="/services"> <li>Services</li></NuxtLink>
               <NuxtLink to="/contact"> <li>Contact Us</li></NuxtLink>
               <NuxtLink to="/portfolio"> <li>Portfolio</li></NuxtLink>
               <NuxtLink to="/testimonial"> <li>Testimonials</li></NuxtLink>
            </ul>
          </div>
          <div class="services flex flex-col gap-2 mx-3">
            <h3 class="font-ubuntu-regular text-lg">Services</h3>
            <ul class="flex flex-col gap-1">
              <NuxtLink to="/seo"> <li>SEO</li></NuxtLink>
              <NuxtLink to="/branding-design"> <li>Branding & Design</li></NuxtLink>
              <NuxtLink to="/e-commerce-design"> <li>Ecommerce Website</li></NuxtLink>
              <NuxtLink to="/website-maintenance"> <li>Website Maintenance</li></NuxtLink>
              <NuxtLink to="/website-design"> <li>Corporate Website Page</li></NuxtLink>
              <NuxtLink to="/hosting"> <li>Website hostingStyle Guide</li></NuxtLink>
            </ul>
          </div>
          <div class="subscribe mt-20 w-full md:w-auto">
    <h3 class="font-ubuntu-regular text-lg text-center md:text-left">Subscribe</h3>
    <div class="flex flex-col sm:flex-row items-center sm:border border-black p-1 rounded-full w-full sm:w-auto">
        <div class="flex-grow">
            <input type="email" class="bg-inherit p-3 placeholder:text-black outline-none sm:border-none border border-black rounded-full w-full sm:w-auto" placeholder="Enter your email here" name="email" id="email">
        </div>
        <button class="mt-2 sm:mt-0 sm:ml-2 py-3 px-4 bg-red-900 hover:bg-red-800 transition-all text-white rounded-full sm:w-auto">Subscribe</button>
    </div>
</div>

        </div>
        <hr class="bg-gray-500 h-[2px] self-center w-5/6 mx-3">
        <div class="bottom flex w-full flex-col md:flex-row justify-around gap-6 md:gap-0 mt-3">
          <div class="copyright text-center">
            <h3 class="text-xl font-ubuntu-regular">Copyright By</h3>
            <p class="roboto-regular">Designed By Iconstica.com</p>
          </div>
          <div class="contact-us text-center">
            <h3 class="text-xl font-ubuntu-regular">Contact Us</h3>
            <p class="roboto-regular">+0 12 457 4578</p>
          </div>
          <div class="address text-center">
            <h3 class="text-xl font-ubuntu-regular">Address</h3>
            <p class="roboto-regular">119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
          <div class="hidden md:flex social-media gap-4">
            <a href="/"> <img src="~/assets/facebook-footer.png" class="hover:grayscale transition-all"  alt=""></a>
            <a href="/"> <img src="~/assets/insta-footer.png" class="hover:grayscale transition-all"  alt=""></a>
            <a href="/"> <img src="~/assets/linkedin-footer.png" class="hover:grayscale transition-all"  alt=""></a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  
  .slanted-footer {
    clip-path: polygon(0 0, 100% 19%, 100% 100%, 0% 100%);
  }
  @media only screen and (max-width: 900px) {
    .slanted-footer {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  </style>
  