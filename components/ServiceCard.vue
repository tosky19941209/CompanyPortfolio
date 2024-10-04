<template>
<div class="group w-[270px] p-5 rounded-xl flex flex-col gap-10 items-start hover:bg-red-900 transition-all  shadow-xl  hover:translate-x-1 hover:translate-y-1">
  <div>
    <div class="img bg-slate-300 w-max h-max p-4 rounded-full">
      <!-- Use the 'image' prop for the src attribute -->
      <img :src="image" width="50" alt="">
    </div>
  </div>
  <div class="flex flex-col items-start gap-4 text-start">
    <!-- Use the 'title' prop here -->
    <h3 class="font-ubuntu text-3xl group-hover:text-white">{{ title }}</h3>
    <!-- Use the 'text' prop here -->
    <p class="roboto-regular text-gray-600 group-hover:text-white">{{ text }}</p>
  </div>
  <NuxtLink to="/" class="font-ubuntu-thin text-red-900 text-xl group-hover:text-white cursor-pointer">View more</NuxtLink>
</div>


</template>

<script lang="ts" setup>
  // Define the props with their types
  const props = defineProps<{
    image: string,
    title: string,
    text: string
  }>()
  console.log(props.image);
  

  
</script>

<style scoped>
/* Your styles here */
</style>
