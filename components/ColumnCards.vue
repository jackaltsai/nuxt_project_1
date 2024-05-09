<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-0 py-4 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div class="">
                <div class="flex justify-center">
                    <img src="https://placeholder.com/60x60">
                </div>
                
                <div class="flex justify-center text-base font-sans">
                    title
                </div>
                <p class="flex justify-center text-xs">
                    subtitle
                </p>
                <div class="flex justify-center">
                    <img src="https://placeholder.com/350x306" class="w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl" :class="{ 'hidden': isImageHidden }">
                </div>
            </div>
            <div class="">
                <div class="flex justify-center">
                    <img src="https://placeholder.com/60x60">
                </div>
                
                <div class="flex justify-center text-base font-sans">
                    title
                </div>
                <p class="flex justify-center text-xs">
                    subtitle
                </p>
                <div class="flex justify-center">
                    <img src="https://placeholder.com/350x306" class="w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl" :class="{ 'hidden': isImageHidden }">
                </div>
            </div>
            <div class="">
                <div class="flex justify-center">
                    <img src="https://placeholder.com/60x60">
                </div>
                
                <div class="flex justify-center text-base font-sans">
                    title
                </div>
                <p class="flex justify-center text-xs">
                    subtitle
                </p>
                <div class="flex justify-center">
                    <img src="https://placeholder.com/350x306" class="w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl" :class="{ 'hidden': isImageHidden }">
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto my-4 bg-blue-100 px-36">
        <div class="font-sans text-center">大中華物業管理集團是由建築業、營造業、餐飲業、律師界精英 組合成立的董事會。 內部組織分為 業務部、綜合管理部、會計部、清潔環保部、機電消防部，皆為高薪禮聘之專業幹部...</div>
    </div>
    <div class="container mx-auto my-4 flex justify-center">
        <CustomButton title="more" />
    </div>
    

</template>

<script>
    export default {
  data() {
    return {
      isImageHidden: false
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      // Set isImageHidden to true when window width is less than or equal to 768px
      this.isImageHidden = window.innerWidth <= 768;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
    .font-sans {
        font-family: "Noto Serif TC";
        font-weight: 140;
        font-style: normal;
        font-size: 20px;
    }
</style>