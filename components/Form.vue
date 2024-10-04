<template>

    <section class="flex flex-col relative justify-center items-center my-14 h-fit">
        <div class="bg-Background w-full sm:w-[1392px] h-[505px] my-8 flex flex-col items-center justify-center gap-7">
          <h2 class="text-5xl sm:text-6xl text-white font-ubuntu text-wrap text-center">Need a free quote?</h2>
          <h3 class="text-4xl roboto-regular text-white font-ubuntu">Fill the form below</h3>
        </div>
        <div class="form border-2 absolute top-96 border-black p-8 bg-white">
          <form action="" class="flex flex-col gap-4">
            <input type="text" placeholder="Your name" class="border-black border p-3 placeholder:text-red-900">
            <input type="email" placeholder="Your email" class="border-black border p-3 placeholder:text-red-900">
            <select name="Select a service" id="">
              <option value="option 1" disabled> Select a services </option>
            </select>
            <textarea name="" id="" cols="30" rows="2" placeholder="Messages"
              class="border-black border p-3 placeholder:text-red-900"></textarea>
            <button type="submit" class="bg-red-800 text-white py-3 p-1 rounded-lg">Request a quote</button>
          </form>
        </div>
      </section>

</template>

<script lang="ts" setup>

</script>

<style>

</style>