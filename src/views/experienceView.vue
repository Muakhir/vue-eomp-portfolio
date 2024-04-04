<template>
    <main class="bg-dark">
      <h2 class="text-center mb-4">Experience</h2>
      <div class="container">
        <!-- Experience Cards -->
        <div class="row justify-content-center align-items-center">
          <div v-for="(exp, index) in experience" :key="index" class="col-md-4 mb-4">
            <div class="card" :ref="'card-' + index">
              <div class="card-body">
                <h5 class="card-title">{{ exp.company }}</h5>
                <p class="card-text">Position: {{ exp.title }}</p>
                <p class="card-text">Location: {{ exp.location }}</p>
                <p class="card-text">Year: {{ exp.dates }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import anime from 'animejs/lib/anime.es.js';
  
  export default {
    computed: {
      experience() {
        return this.$store.state.experience;
      },
    },
    mounted() {
      this.$store.dispatch('getExperience');
    },
    updated() {
      this.animateCards();
    },
    methods: {
      animateCards() {
        this.experience.forEach((exp, index) => {
          const card = this.$refs[`card-${index}`][0];
          anime({
            targets: card,
            translateY: [-500, 0],
            opacity: [0, 1],
            scale: [1, 1.1, 1], // Bounce effect with scale
            loop: false, // Loop the animation
            delay: anime.stagger(100),
            duration: 500,
            easing: 'easeInOutQuad'
          });
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Existing styles */
  main {
    min-height: 100vh; /* Set minimum height to cover the viewport */
  }
  
  .bg-dark {
    background-color: rgba(38, 36, 36, 0.541);
  }
  
  .card {
    border: 3px solid #fff;
    margin-top: 100px;
    margin-bottom: 50px;
    background-color: rgba(38, 36, 36, 0.541);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden; /* Ensure the scale animation does not overflow */
    position: relative; /* Ensure position context for the animated objects */
  }

  .card:hover{
    border: 3px solid #0d0d0d;
    background-color: #9e6b19;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: rgb(255, 255, 255);
  }
  
  .card-text {
    font-size: 1rem;
    color: #fafafa;
    margin-bottom: 0.5rem;
  }

  .card-text:hover{
    color: #fff;
  }

  .card-title:hover{
    color: #050505;
  }
  
  .card-text:last-child {
    margin-bottom: 0; /* Remove margin from the last card text element */
  }
  
  .card-body {
    height: 200px; /* Set a fixed height for the card body */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  </style>
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
