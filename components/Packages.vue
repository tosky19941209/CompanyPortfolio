<template>
  <section class=" flex flex-col justify-center items-center gap-20 my-10 ">

    
    <div class="cards flex flex-col sm:flex-row flex-wrap justify-center gap-20 sm:gap-32  ">
      <div class="card w-[323px] flex flex-col gap-10  ">
        <div class="top red-card-bg text-white py-4 px-6 flex flex-col gap-16 ">
          <div class="card-heading">

            <h1 class="cabin-regular text-2xl">Basic Plan</h1>
            <p class="lato-regular">The argument in favour of using to filter text goes something</p>
          </div>
          <div class="card-footing flex  gap-6 ">
            <h1>$35</h1>
            <div class="bg-zinc-700 px-4 py-1 rounded-full">
              <h4>Monthly</h4>
            </div>
          </div>
        </div>
        <div class="bottom  ">
          <ul class="flex flex-col gap-4 ml-5">
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">24/7 system monitoring</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Security management</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Secure finance backup</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Remote support</li>
          </ul>
          <div class="flex justify-center my-5">

            <button class="bg-white border border-black px-24 py-3 rounded-full  lato-bold hover:bg-red-900 hover:text-white hover:translate-y-1 hover:shadow transition-all ">Get This Plan</button>
          </div>
        </div>
      </div>
      <div class="card w-[323px] flex flex-col gap-10  ">
        <div class="top black-card-bg text-white py-4 px-6 flex flex-col gap-16 ">
          <div class="card-heading">

            <h1 class="cabin-regular text-2xl">Standard Plan</h1>
            <p class="lato-regular">The argument in favour of using to filter text goes something</p>
          </div>
          <div class="card-footing flex  gap-6 ">
            <h1>$35</h1>
            <div class="bg-red-900 px-4 py-1 rounded-full">
              <h4>Monthly</h4>
            </div>
          </div>
        </div>
        <div class="bottom  ">
          <ul class="flex flex-col gap-4 ml-5">
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">24/7 system monitoring</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Security management</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Secure finance backup</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Remote support</li>
          </ul>
          <div class="flex justify-center my-5">

            <button class="bg-red-900 px-24 py-3 rounded-full text-white lato-bold hover:bg-red-900 hover:text-white hover:translate-y-1 hover:shadow transition-all ">Get This Plan</button>
          </div>
        </div>
      </div>
      <div class="card w-[323px] flex flex-col gap-10  ">
        <div class="top red-card-bg text-white py-4 px-6 flex flex-col gap-16 ">
          <div class="card-heading">

            <h1 class="cabin-regular text-2xl">Advance Plan</h1>
            <p class="lato-regular">The argument in favour of using to filter text goes something</p>
          </div>
          <div class="card-footing flex  gap-6 ">
            <h1>$35</h1>
            <div class="bg-zinc-700 px-4 py-1 rounded-full">
              <h4>Monthly</h4>
            </div>
          </div>
        </div>
        <div class="bottom  ">
          <ul class="flex flex-col gap-4 ml-5">
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">24/7 system monitoring</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Security management</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Secure finance backup</li>
            <li class="flex gap-3 lato-regular"><img src="~/assets/tick.svg" alt="">Remote support</li>
          </ul>
          <div class="flex justify-center my-5">

            <button class="bg-white border border-black px-24 py-3 rounded-full  lato-bold hover:bg-red-900 hover:text-white hover:translate-y-1 hover:shadow transition-all ">Get This Plan</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>
.red-card-bg {
  background-image: url('/bg-hosting-price-red.png');
}

.black-card-bg {
  background-image: url('/bg-hosting-price-black.png');
}
</style>