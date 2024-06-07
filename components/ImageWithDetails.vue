<template>
    <ul role="list" class="p-3 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <li v-for="file in files" :key="file.source" class="relative">
        <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img :src="file.source" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for {{ file.title }}</span>
          </button>
        </div>
        <p class="p-3 pointer-events-none mt-2 block truncate text-2xl font-medium text-gray-900">{{ file.title }}</p>
      </li>
    </ul>
  </template>
  
  <script setup>
  const files = [
    {
      title: '假投資群組詐騙',
    //   size: '3.9 MB',
      source:
        'https://placeholder.com/512x512',
    },
    {
      title: '愛情交友詐騙',
    //   size: '3.9 MB',
      source:
        'https://placeholder.com/512x512',
    },
    {
      title: '假網拍',
    //   size: '3.9 MB',
      source:
        'https://placeholder.com/512x512',
    },
    {
      title: '遊戲詐騙及假借貸',
    //   size: '3.9 MB',
      source:
        'https://placeholder.com/512x512',
    },
    // More files...
  ]
  </script>