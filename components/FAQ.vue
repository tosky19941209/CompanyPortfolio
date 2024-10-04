<template>
  <section class="flex flex-col justify-center items-center gap-5 my-20 mx-4 ">
    <div class="headings text-center flex flex-col gap-5">
      <h1 class="text-4xl font-ubuntu">Frequently Asked Questions</h1>
      <h4 class="font-ubuntu-regular text-gray-600 text-lg lg:w-[610px]">With lots of unique blocks, you can easily
        build a page without coding. Build your next consultancy website within few minutes.</h4>
    </div>
    <Accordions />
    <div class="">
      Haven't got your answer? <NuxtLink to="/contact" class="text-blue-700 font-ubuntu-regular hover:text-blue-800 transition-colors ">Contact Our Support Now</NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style></style>