<template>
  <div class="home">
    <div class="row" v-if="fetchjobtitle">

    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeViewComp',
  computed:{
    jobTitle(){
      return this.$store.state.jobTitle;
    },
    mounted(){
      this.$store.dispatch('fetchjobTitle')
    }
  }
}
</script>
