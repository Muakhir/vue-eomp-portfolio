<template>
    <main>
        <h2 class="d-flex justify-content-center">Education</h2>
        <div class="container-fluid row Eard" v-if="education">
          <div v-for="(edd, index) in education" class="card" :key="index" style="width: 20rem;">
            <!-- <img :src="project.image" class="card-img" alt="..."> -->
            <div class="card-body" id="educ">
              <h5 class="card-title">{{ edd.place }}</h5><br>
              <p>Year:  {{ edd.year }}</p>
              <p>{{ edd.description }}</p>
            </div>
          </div>
        </div>
        <h2 class="d-flex justify-content-center">Skills</h2>
        <div class="container-fluid row Sard" v-if="skills">
          <div v-for="(skill, index) in skills" class="card" :key="index" style="width: 18rem;">
            <img :src="skill.image" class="card-img-top" :class="Pimg" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ skill.title }}</h5>
              <p>{{ skill.experience }}</p>
            </div>
          </div>
        </div>
    </main>
  </template>
  
  <script>
  export default {
    computed: {
      education() {
        return this.$store.state.education; 
      },
      skills() {
        return this.$store.state.skills;
      }
    },
    mounted() {
      this.$store.dispatch('getEducation'),
      this.$store.dispatch('getSkills')
    }
  }
  </script>
  
  <style scoped>
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
  
main{
    height: 180vh;
}

  .Eard {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-bottom: 20px;
  }
  
  .card {
    border: 2px solid;
    background-color: rgba(38, 36, 36, 0.541);
    color: #fff;
    animation: slideInFromLeft 0.5s ease forwards;
  }
  
  .card:hover {
    background-color: grey;
    color: gold;
    box-shadow: 5px 15px 10px rgb(65, 54, 7);
  }
  
  .card img:hover {
    filter: brightness(0) invert(1);
  }
  
  .Sard {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 1080px) {
  main{
    height: 300vh;
  }
}
  @media (max-width: 800px) {
    .Sard {
      margin-left: 3px;
    }
  }
  
  @media (max-width: 400px) {
    .Eard {
      margin-left: 1px;
    }
  }
  </style>
  
  