<template>
  <button type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
  