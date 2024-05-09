<!-- /company/:id -->
<template>
    <div>
        <h2>每間公司詳細內容</h2>
        <p>{{ id }}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi totam alias fuga eaque accusamus dolores, dolore est quo optio illo deleniti molestiae vel quas ipsam corporis molestias amet voluptate! Atque.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis esse quidem sed adipisci nam doloremque, sequi atque itaque ipsa, natus tempora dolorum! Neque sint, ex enim natus cumque molestiae quam?</p>
    </div>
</template>
    
<script setup>
    const { id } = useRoute().params;

    definePageMeta({
        layouts: 'company',
    })
</script>

<style scoped>

</style>