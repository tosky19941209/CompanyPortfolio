<template>
  <div class="flex justify-center overflow-x-hidden px-1">
    <section class="my-7 flex sm:hidden flex-row gap-2 items-center">
      <div @click="decrement" class="cursor-pointer bg-gray-200 px-1 rounded-full"><</div>
      <article
        class="bg-red-100 w-full max-w-[384px] min-h-[350px] px-7 py-7 flex flex-col gap-5 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all"
        v-show="count == 1"  @click="increment" >
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

      <article
        class="bg-slate-100 w-full max-w-[384px] min-h-[350px] px-7 py-7 flex flex-col gap-5 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all"
        v-show="count === 2" @click="increment" >
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

      <article
        class="bg-red-100 w-full max-w-[384px] px-7 py-7 min-h-[350px] flex flex-col gap-5 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all"
        v-show="count == 3" @click="increment" >
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
      <div @click="increment" class="sor-pointer bg-gray-200 px-1 rounded-full">></div>
    </section>
    <section class="my-7 hidden  flex-row md:flex md:flex-row sm:grid sm:grid-cols-2 gap-1 items-center" @click="changeShiftCounter" >
      
      <CardOne  v-show="shiftCounter === 1" />
      <CardTwo v-show="shiftCounter === 1" is-between="true"/>
      <CardThree v-show="shiftCounter === 1" />

      <CardTwo v-show="shiftCounter === 2"/>
      <CardThree v-show="shiftCounter === 2" is-between="true" />
      <CardOne v-show="shiftCounter === 2" />

      <CardThree v-show="shiftCounter === 3" />
      <CardOne v-show="shiftCounter === 3" is-between="true" />
      <CardTwo v-show="shiftCounter === 3" />

      

      
      
    </section>
  </div>
</template>

<script lang="ts" setup>
const count = ref(2)

const increment = () => {
  if (count.value !== 3) {
    count.value++
  } else {
    count.value = 1
  }
}

const decrement = () => {
  if (count.value !== 1) {
    count.value--
  } else {
    count.value = 3
  }
}

const shiftCounter = ref(1)

const changeShiftCounter = () => {
  if (shiftCounter.value !== 3) {
    shiftCounter.value++
  }
  else{
    shiftCounter.value = 1
  }
}

</script>

<style>
/* Add any additional styles you may need here */
</style>
