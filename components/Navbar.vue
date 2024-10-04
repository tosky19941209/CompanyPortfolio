<template>
  <nav class="nav bg-white shadow-md px-4 py-2 flex items-center justify-between  mx-2 sm:mx-3 rounded-full ">
    <img src="~/assets/emtech.png" alt="Logo" width="40" class="mr-4">
    <div class="hidden xl:flex items-center space-x-4">
      <NuxtLink to="/" class="nav-link">HOME</NuxtLink>
      <NuxtLink to="/about" class="nav-link">ABOUT</NuxtLink>
      <NuxtLink to="/services" class="nav-link">SERVICES</NuxtLink>
      <NuxtLink to="/portfolio" class="nav-link">PORTFOLIO</NuxtLink>
      <NuxtLink to="/testimonial" class="nav-link">TESTIMONIALS</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">CONTACT US</NuxtLink>
      <NuxtLink to="/careers" class="nav-link">CAREERS</NuxtLink>
    </div>
    <NuxtLink to="/contact" class="hidden xl:block bg-red-900 hover:bg-red-950  text-white px-4 py-2 rounded-full hover:translate-x-1 transition-all duration-300">Get in Tossuch</NuxtLink>
    <button @click="toggleMenu" class="xl:hidden flex items-center text-gray-700">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    <div :class="{ 'block': isOpen, 'hidden': !isOpen }"
      class="xl:hidden absolute top-16 left-0 right-0 bg-white shadow-md mx-3 rounded-md p-4">
      <NuxtLink to="/" class="block py-2 hover:translate-x-1 transition-all duration-300">HOME</NuxtLink>
      <NuxtLink to="/about" class="block py-2 hover:translate-x-1 transition-all duration-300">ABOUT</NuxtLink>
      <NuxtLink to="/services" class="block py-2 hover:translate-x-1 transition-all duration-300">SERVICES</NuxtLink>
      <NuxtLink to="/portfolio" class="block py-2 hover:translate-x-1 transition-all duration-300">PORTFOLIO</NuxtLink>
      <NuxtLink to="/testimonial" class="block py-2 hover:translate-x-1 transition-all duration-300">TESTIMONIALS</NuxtLink>
      <NuxtLink to="/contact" class="block py-2 hover:translate-x-1 transition-all duration-300">CONTACT US</NuxtLink>
      <NuxtLink to="/careers" class="block py-2 hover:translate-x-1 transition-all duration-300">CAREERS</NuxtLink>
      <NuxtLink to="/contact"
        class="w-full bg-red-900 hover:bg-red-800  text-white px-4 py-2 mt-4 rounded-full hover:translate-x-1 transition-all duration-300">
        Get in Touch
      </NuxtLink>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.nav-link {
  padding: 0.5rem 1rem;
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: gray;
}
</style>