<template>
  <section class="flex flex-col lg:flex-row justify-around gap-3">
    <article class="  sm:w-[526px] text-center flex flex-col gap-7">
      <h2 class="text-red-900 text-4xl font-ubuntu ">If You Have Any Query, Feel Free To Contact Us</h2>
      <p class="text-lg roboto-regular">Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster collaborative.</p>
      <div class=" hidden contacts lg:flex flex-col gap-10">
        <div class="  flex gap-3">
          <img src="~/assets/contact1.png" alt="">
          <div>
            <h3 class="text-red-900 font-ubuntu">Call Today</h3>
            <h4 class="font-ubuntu">+1 800 100 900</h4>
          </div>
        </div>
        <div class="flex gap-3">
          <img src="~/assets/contact2.png" alt="">
          <div>
            <h3 class="text-red-900 font-ubuntu">Monday to Friday</h3>
            <h4 class="font-ubuntu">+1 800 100 900</h4>
          </div>
        </div>
        <div class="flex gap-3">
          <img src="~/assets/contact3.png" alt="">
          <div>
            <h3 class="text-red-900 font-ubuntu">Call Today</h3>
            <h4 class="font-ubuntu">+1 800 100 900</h4>
          </div>
        </div>



      </div>
    </article>
    <aside class="flex flex-col gap-10 px-4 md:px-8 lg:px-16 w-full lg:w-[700px]">
  <div class="flex flex-col md:flex-row gap-5 w-full">
    <div class="flex flex-col gap-3 w-full md:w-1/2 ">
      <label for="name" class="font-ubuntu">Full name</label>
      <div class="input">
        <input type="text" name="name" id="name" placeholder="john david"
          class="border py-4 px-3 text-xl rounded-full border-gray-400 outline-none w-full">
      </div>
    </div>
    <div class="flex flex-col gap-3 w-full md:w-1/2 ">
      <label for="email" class="font-ubuntu">Email</label>
      <div>
        <input type="email" name="email" id="email" placeholder="consult@mail.com"
          class="border py-4 px-3 text-xl rounded-full border-gray-400 outline-none w-full">
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row gap-5 w-full">
    <div class="flex flex-col gap-3 w-full md:w-1/2 ">
      <label for="phone" class="font-ubuntu">Phone</label>
      <div>
        <input type="text" name="phone" id="phone" placeholder="+008 654 231"
          class="border py-4 px-3 text-xl rounded-full border-gray-400 outline-none w-full">
      </div>
    </div>
    <div class="flex flex-col gap-3 w-full md:w-1/2 ">
      <label for="company" class="font-ubuntu">Company Name</label>
      <div>
        <input type="text" name="company" id="company" placeholder="yourcompany.com"
          class="border py-4 px-3 text-xl rounded-full border-gray-400 outline-none w-full">
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-3 w-full">
    <label for="message" class="font-ubuntu">Message</label>
    <div>
      <textarea name="message" id="message"
        placeholder="Briefly tell us about your project and current goals. How can we help you?"
        class="w-full h-[170px] border py-4 px-3 text-xl rounded-xl border-gray-400 outline-none"></textarea>
    </div>
  </div>
  <button type="submit" class="self-center sm:self-auto hover:translate-x-1  transition-all">
    <img src="~/assets/sendnow.png" alt="Send Now">
  </button>
</aside>



  </section>
</template>

<script lang="ts" setup>

</script>

<style></style>