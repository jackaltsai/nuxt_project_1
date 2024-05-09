<template>
    <div class="flex items-center justify-center">
      <div class="h-line w-1/4 bg-gray-300"></div> <!-- Left line -->
      <div class="mx-4 text-gray-400">{{ title }}</div> <!-- Title -->
      <div class="h-line w-1/4 bg-gray-300"></div> <!-- Right line -->
    </div>
  </template>
  
<script>
  export default {
    name: 'HorizontalLine',
    props: {
      title: String,
    },
  };
</script>
  
<style scoped>
    .h-line {
        border-bottom: 1px solid #9ca3af; /* 1px solid black */
    }
</style>
  