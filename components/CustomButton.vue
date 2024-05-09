<template>
    <button class="bg-red-500 hover:bg-red-700 text-white font-normal py-6 px-20 rounded">
      {{ title }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Any additional styling can be added here */
  </style>
  