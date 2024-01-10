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
        <img src="https://iili.io/J76T6uI.md.jpg" loading="lazy" class="Aimg1" alt="Gaming Setup">
        <img src="https://iili.io/J76A4LX.md.jpg" loading="lazy" class="Aimg1" alt="tech">
        <img src="https://iili.io/J765JtI.md.jpg" loading="lazy" class="Aimg1" alt="Dev">
        <img src="https://iili.io/J76AZ74.md.jpg" loading="lazy" class="Aimg1" alt="Dev">
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
