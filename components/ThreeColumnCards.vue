<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">本協會為依法設立、非以營利為目的之公益性社會團體，以反詐騙、打擊犯罪及人道救援為宗旨</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">任何假借本協會名義藉此幫助受害者都是騙人的！有任何被詐騙的情況請打165,或者直接到附近的警局備案！</p>
        </div>

        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <!-- <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"> -->
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            // 1
            <img src="/assets/img/1.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="support">
                <span class="absolute inset-0" />
                詐騙受害人協助
              </a>
            </h3>
          </article>
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            //2
            <img src="/assets/img/2.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="articles">
                <span class="absolute inset-0" />
                  詐騙網站揭發
              </a>
            </h3>
          </article>
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            // 3
            <img src="/assets/img/3.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="contact">
                <span class="absolute inset-0" />
                  聯絡我們
              </a>
            </h3>
          </article>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  // const posts = [
  //   {
  //     id: 1,
  //     title: '詐騙受害人協助',
  //     href: 'support',
  //     description:
  //       '',
  //     imageUrl:
  //       '/img/1.png',
  //     date: '',
  //     datetime: '',
  //     author: {
  //       // name: 'Michael Foster',
  //       // imageUrl:
  //       //   'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: '詐騙網站揭發',
  //     href: 'articles',
  //     description:
  //       '',
  //     imageUrl:
  //       '/img/2.png',
  //     date: '',
  //     datetime: '',
  //     author: {
  //       // name: 'Michael Foster',
  //       // imageUrl:
  //       //   'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: '聯絡我們',
  //     href: 'contact',
  //     description:
  //       '',
  //     imageUrl:
  //       '/img/3.png',
  //     date: '',
  //     datetime: '',
  //     author: {
  //       // name: 'Michael Foster',
  //       // imageUrl:
  //       //   'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  //   // More posts...
  // ]
</script>