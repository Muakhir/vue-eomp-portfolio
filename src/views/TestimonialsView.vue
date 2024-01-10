<template>
    <div>
        <h2 class="d-flex justify-content-center">Testimonials</h2>
    <div class="container-fluid row Sard" v-if="testimonials">
    <div v-for="testy in testimonials" class="card" :key="testy.name" style="width: 18rem;">
        <img :src="testy.image" class="card-img-top" :class="timg" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{ testy.name }} {{ testy.surname }}</h5>
        <p>{{ testy.quotes }}</p>

    </div>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        computed:{
        testimonials(){
            return this.$store.state;
        }
    },
    mounted(){
        this.$store.dispatch('get')
    }    
    }
</script>

<style scoped>

</style>