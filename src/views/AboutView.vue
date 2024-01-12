<template>
  <div class="container-fluid" >
    <div class="about" v-if="about">
      <h2 class="d-flex justify-content-center mb-5">About</h2>
      <div class="row mb-5">
        <p class="lead" v-for="title in about" :key="title">
          {{ title }}
        </p>
     </div>
      <div class="row Rimg">
        <div class="col Aimg">
          <img src="https://iili.io/J76T6uI.md.jpg" loading="lazy" class="Aimg2" alt="Gaming Setup">

        </div>
        <div class="col Aimg">
          <img src="https://iili.io/J76A4LX.md.jpg" loading="lazy" class="Aimg1" alt="tech">

        </div>
        <div class="col Aimg">
          <img src="https://iili.io/J765JtI.md.jpg" loading="lazy" class="Aimg2" alt="Dev">

        </div>
        <div class="col Aimg">
          <img src="https://iili.io/J76AZ74.md.jpg" loading="lazy" class="Aimg3" alt="Dev">

        </div>
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
    },
 

  }
</script>

<style scoped>

.Aimg1{
  float: right;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  padding: 20px;
}
.Aimg3{
  float: right;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  padding: 20px;
}
.Aimg2{
  float: left;
  margin-left: 20px;
  margin-top: 25px;
  width: 490px;
  height: 280px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 720px){
  .Rimg{
    margin-left: 70px;
  }
  .Aimg1{
    width: 500px;
    margin-top: 0;
    padding: 5px;
    float: none;
  }
  .Aimg2{
    margin-top: 0;
    float: none;
    margin-left: 3px;
  }
  .Aimg3{
    padding: 5px;
    float: none;
  }

}
@media (max-width: 615px){
  .Rimg{
    margin-left: 0;
    margin-right: 5px;
  }
  .Aimg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 0;
  }
  .Aimg1{
    width: 250px;
    padding: 15px;
  }
  .Aimg2{
    height: 150px;
    width: 250px;
    padding: 15px;
    border-radius: 40px;
  }
  .Aimg3{
    width: 250px;
    padding: 15px;
  }
}

</style>
