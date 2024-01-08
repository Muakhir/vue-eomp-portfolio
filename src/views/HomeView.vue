<template>
  <div class="home">
    <div class="row" v-if="fetchAbout">

    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeViewComp',
  computed:{
    jobTitle(){
      return this.$store.state.about
    }
    },
    mounted(){
      this.$store.dispatch('fetchAbout')
    }
}
</script>
