<template>
    <section>
        <div>
            <img src="/assets/img/20.png">
            
        </div>
        <HorizontalLine title="聯絡我們將透過以下Google 表單『詐欺案件協助』" class="text-xl m-16"/>
        <div class="text-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQCKihm1OhsVzEKxfvti_Ruq2h5AMOvtfz9A5Cw7HuzhsaKw/viewform">
                <button type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">聯絡我們</button>
            </a>
        </div>
    </section>
    <!-- CTA section -->
    <div class="relative isolate -z-10 mt-32 sm:mt-40">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
            <div class="w-full flex-auto">
              <h2 class="text-3xl font-bold tracking-tight text-violet-600 sm:text-4xl">加入我們志工</h2>
              <p class="mt-6 text-lg leading-8 text-violet-500">歡迎加入『台灣國際反詐騙協會』，協助更多人免於詐騙！</p>
              <ul role="list" class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-violet-400 sm:grid-cols-2">
                <li v-for="benefit in benefits" :key="benefit" class="flex gap-x-3">
                  
                  {{ benefit }}
                </li>
              </ul>
              <div class="mt-10 flex">
                <a href="" class="text-sm font-semibold leading-6 text-indigo-400">Email me <span aria-hidden="true">&rarr;</span>hata.s520@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
          <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#FFFFFF] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
        </div>
      </div>
</template>

<script setup>
const benefits = [
  'HR人力資源',
  '陪伴者',
  '會計師',
  '行政支援者',
  '粉絲專頁小編',
]
</script>