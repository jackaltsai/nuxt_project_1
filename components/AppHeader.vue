<template>
    <div>
      <!-- Navbar -->
      <nav class="bg-white max-w-5xl sm:bg-white sm:max-w-5xl md:bg-white md:max-w-5xl lg:bg-white lg:max-w-5xl xl:bg-white xl:max-w-5xl">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between h-16">
            <!-- Menu button -->
            <div class="flex">
              <button @click="toggleMenu" class="text-gray-500 focus:outline-none lg:hidden">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
                <img src="~/assets/img/ICON.png">
                <div>
                  <NuxtLink to="/" class="px-2 font-sans-logo font-bold text-gray-800">台灣國際反詐騙協會</NuxtLink>
                  <p class="px-3 text-xs font-roboto text-zinc-400">Taiwan International Anti-Scam Association</p>
            </div>
            </div>
            
            <!-- Navigation Links -->
            <div class="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
                <NuxtLink to="/about" class="font-sans text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">關於我們</NuxtLink>
                <NuxtLink to="/articles" class="font-sans text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">文章分享</NuxtLink>
                <NuxtLink to="/contact" class="font-sans text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">聯絡我們</NuxtLink>
            </div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="lg:hidden" @click.away="closeMenu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink to="/about" class="font-sans text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">關於我們</NuxtLink>
            <NuxtLink to="/articles" class="font-sans text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">文章分享</NuxtLink>
            <NuxtLink to="/contact" class="font-sans text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">聯絡我們</NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      }
    }
  };
  </script>

<style scoped>
    .font-sans-logo {
        font-family: "Noto Serif TC", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 26px;
    }

    .font-sans {
        font-family: "Noto Serif TC", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
    }
</style>
  