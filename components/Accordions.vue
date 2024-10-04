<script setup lang="ts">
import { ref } from 'vue';

const items = [{
  id: 1,
  label: 'Can I use Albino for my clients?',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre..'
}, {
  id: 2,
  label: 'Does it work with WordPress?',
  icon: 'i-heroicons-arrow-down-tray',
  defaultOpen: false,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  id: 3,
  label: 'Do I get free updates?',
  icon: 'i-heroicons-eye-dropper',
  defaultOpen: false,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  id: 4,
  label: 'Will you provide support?',
  icon: 'i-heroicons-rectangle-group',
  defaultOpen: false,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}];

const openItems = ref(new Set(items.filter(item => item.defaultOpen).map(item => item.id)));

const toggleItem = (id: number) => {
  if (openItems.value.has(id)) {
    openItems.value.delete(id);
  } else {
    openItems.value.add(id);
  }
};
</script>

<template>
  <div class=" w-auto lg:w-[1200px]  flex flex-col gap-5" >

    <div v-for="item in items" :key="item.id" class="accordion-item border border-gray-200 rounded-2xl px-7 py-5 flex flex-col gap-4 cursor-pointer ">
      <div class="accordion-header font-ubuntu text-2xl "  @click="toggleItem(item.id)">
        <i :class="item.icon"></i>
        {{ item.label }}
      </div>
      <div v-if="openItems.has(item.id)" class="accordion-content font-ubuntu text-gray-500 cursor-auto  ">
        {{ item.content }} 
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

