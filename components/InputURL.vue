<template>
    <div>
      <label for="company-website" class="mt-36 text-center block text-sm font-medium leading-6 text-gray-900">請輸入疑似詐騙網址！</label>
      <div class="w-fit m-auto mt-2 mb-12">
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://</span>
          <input type="text" name="company-website" id="company-website" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="www.example.com" />
        </div>
      </div>
    </div>
</template>