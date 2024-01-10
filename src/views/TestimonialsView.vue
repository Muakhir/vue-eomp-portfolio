<template>
    <!-- <div>
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
    </div> -->
    <div>
        <h2>Testimonials</h2>
    </div>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" v-if="testimonials">
    <div v-for="testy in testimonials" class="carousel-item active" :key="testy.name">
      <img :src="testy.profile" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ testy.name }} {{ testy.surname }}</h5>
        <p>{{ testy.quotes }}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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

</style>