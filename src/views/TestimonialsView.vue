<template>
    <div>
        <h2 class="d-flex justify-content-center hed">Testimonials</h2>
    <div class="container-fluid row Tard" v-if="testimonials">
    <div v-for="testy in testimonials" class="card" :key="testy.name" style="width: 18rem;">
        <img :src="testy.profile" class="card-img" :class="timg" alt="...">
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
            return this.$store.state.testimonials;
        }
    },
    mounted(){
        this.$store.dispatch('getTestimonials')
    }    
    }
</script>

<style scoped>
.Tard{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}
.card:hover{
    background-color: rgb(3, 3, 3);
    color: gold;
    box-shadow: 5px 15px 10px rgb(65, 54, 7);
}
.card{
    border: 2px solid rgba(0, 0, 0, 0.744);
    padding: 15px;
}
.card-img{
    height: 300px;
    border-radius: 15px;
    padding: 5px;
}
.hed{
    padding: 15px;
}
</style>