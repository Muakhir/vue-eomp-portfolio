<template>
    <main>
        <h2 class="d-flex justify-content-center">Projects</h2>
        <div class="container-fluid row" v-if="projects">
            <div v-for="(project, index) in projects" :key="project.name" class="card" :style="{ animationDelay: `${index * 0.1}s` }">
                <img :src="project.image" class="card-img-top" alt="..." :style="{ transition: 'transform 0.3s' }">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p>{{ project.description }}</p>
                    <a :href="project.gitHub" class="btn btn" target="_blank">GitHub</a>
                    <a :href="project.netlify" class="btn btn" target="_blank">Visit</a>
                </div>
            </div>
        </div>
    </main>
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
    .card-body{
        color: #fff;
    }

    .card-body:hover{
        color: #f6b342;
    }

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
        margin-bottom: 100px;
        width: 16rem;
        margin-left: 25px;
        margin-top: 10px;
        border-radius: 20px;
        background-color: rgba(38, 36, 36, 0.541);
        opacity: 0;
        overflow: hidden;
    }
    img{
        margin-right: 5px;
        border-radius: 20px;
        padding: 5px;
        transition: transform 0.3s;
    }
    img:hover {
        transform: scale(1.1);
    }
    .card:hover{
        box-shadow: 0px 5px 15px;
        background-color: #545454;
        color: #f6b342;
    }

    /* Animation */
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .card {
        animation: slideInFromLeft 0.5s ease forwards;
    }
</style>

