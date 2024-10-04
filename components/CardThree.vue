<template>
  <article
        class=" w-full max-w-[384px] px-7 py-7 min-h-[350px] flex flex-col gap-5 "
        :class="isBetween ? 'bg-white shadow-xl' : 'bg-red-100'"
        >
        <div class="flex flex-col sm:flex-row gap-6">
          <img src="~/assets/people3.png" alt="" class="w-24 h-24 object-cover">
          <div class="text">
            <h3 class="inter-regular text-red-900">James Wilson</h3>
            <h3 class="lato-bold text-gray-600">Application Development</h3>
          </div>
        </div>
        <p class="lato-regular text-gray-500">Application development refers to the process of creating software
          applications for various platforms and devices, such as mobile phones, desktop computers, web browsers, and
          more.</p>
      </article>
</template>

<script lang="ts" setup>

const props = defineProps(['isBetween'])

</script>

<style>

</style>