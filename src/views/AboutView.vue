<template>
  <div class="container-fluid">
    <div class="about">
      <h2 class="d-flex justify-content-center mb-5">About</h2>
      <div class="row mb-5" v-if="about">
        <p class="lead" v-for="title in about" :key="title">
          {{ title }}
        </p>
     </div>
      <div class="row Aimg mb-5">
        <img src="https://drive.google.com/uc?id=1bU7mGr6BdJeaMAjclS2gQ81NF8xfwP4N" loading="lazy" class="Aimg1" alt="Gaming Setup">
        <img src="https://drive.google.com/uc?id=1jKx287Dm5etmIHxGdfl8-EV7QADWXOha" loading="lazy" class="Aimg1" alt="tech">
        <img src="https://drive.google.com/uc?id=1gpx3LZWyCdE-C4H4OB0GrFon9kh_PZXr" loading="lazy" class="Aimg1" alt="Dev">
        <img src="https://drive.google.com/uc?id=1gpx3LZWyCdE-C4H4OB0GrFon9kh_PZXr" loading="lazy" class="Aimg1" alt="Dev">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      about(){
        return this.$store.state.about;
      }
    },
    mounted(){
      this.$store.dispatch('getAbout')
    }

  }
</script>

<style scoped>
.Aimg{
  display: flex;
  flex-wrap: nowrap;
  width: 380px;
}
.Aimg1{
  display: flex;
  border-radius: 25px;
}
</style>
