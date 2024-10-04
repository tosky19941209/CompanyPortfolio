<template>
  <article
        class=" w-full max-w-[384px] min-h-[350px] px-7 py-7 flex flex-col gap-5 "
        :class="isBetween ? 'bg-white shadow-xl' : 'bg-red-100'"
        >
        <div class="flex flex-col sm:flex-row gap-6">
          <img src="~/assets/people1.png" alt="" class="w-24 h-24 object-cover">
          <div class="text">
            <h3 class="inter-regular text-red-900">Michael Aderson</h3>
            <h3 class="lato-bold text-gray-600">Profession</h3>
          </div>
        </div>
        <p class="lato-regular text-gray-500">The Information Technology (IT) field encompasses a wide range of
          professions and career opportunities. IT professionals work with technology systems and software to design,
          develop, manage, and maintain various aspects of computing and information systems.</p>
      </article>
</template>

<script lang="ts" setup>
const props = defineProps(['isBetween'])
</script>

<style>

</style>