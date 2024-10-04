<template>
  <article
        class=" w-full max-w-[384px] min-h-[350px] px-7 py-7 flex flex-col gap-5 "
         :class="isBetween? 'bg-white shadow-xl' : 'bg-red-100'" >
        <div class="flex flex-col sm:flex-row gap-6">
          <img src="~/assets/people2.png" alt="" class="w-24 h-24 object-cover">
          <div class="text">
            <h3 class="inter-regular text-red-900">Emily Davis</h3>
            <h3 class="lato-bold text-gray-600">Business Woman</h3>
          </div>
        </div>
        <p class="lato-regular text-gray-500">"Business women" refers to women who are actively engaged in various
          aspects of the business world. This can include women who are entrepreneurs, business owners, corporate
          executives, managers, professionals, or employees in various industries.</p>
      </article>
</template>

<script lang="ts" setup>
const props = defineProps(['isBetween'])
</script>

<style>

</style>