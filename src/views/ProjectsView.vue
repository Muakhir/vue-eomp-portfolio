<template>
    <h2 class="d-flex justify-content-center">Projects</h2>
    <div class="container-fluid row" v-if="projects">
    <div v-for="project in projects" class="card" :key="project.name" style="width: 18rem;">
        <img :src="project.image" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p>{{ project.description }}</p>
        <a :href="project.gitHub" class="btn btn-primary" target="_blank">GitHub</a>
        <a :href="project.netlify" class="btn btn-primary" target="_blank">Netlify</a>
  </div>
</div>
</div>
</template>

<script>
    export default {
    computed:{
        projects(){
         return this.$store.state.projects; 
        }
    },
    mounted(){
        this.$store.dispatch('getProjects')
    }
    }
</script>

<style scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
}
.btn{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 5px;
    background-color: black;
    color: gold;
}
.btn:hover{
    background-color: gold;
    color: black;
}
.card{
    margin-left: 25px;
    margin-top: 10px;
    border-radius: 20px;
}
img{
    margin-right: 5px;
    border-radius: 20px;
    padding: 5px;
}
.card:hover{
    box-shadow: 0px 5px 15px;
    background-color: #545454;
    color: #f6b342;
}
@media (max-width: 768px) {
   img{
    margin-right: 5px;
    border-radius: 20px;
    padding: 5px;
   }
}
</style>