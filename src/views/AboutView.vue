<template>
  <main>
    <div class="container">
      <div class="about" ref="about">
        <h2 class="about-heading">About</h2>
        <div class="container-fluid">
          <div class="row">
            <p class="lead about-text">
              Hello there! 👋 I'm Al-Mu'akhir Jones, a 20-year-old born on [12/12/2003], proud to call Rocklands, Mitchell's Plain my hometown. 🎸 My journey into the tech world began with a spark of curiosity that ignited my passion for web development. 💻 While I'm eagerly awaiting my certificate from Lifechoices Coding Academy, I've been diligently exploring the intricacies of web development, refining my skills, and crafting innovative projects. Beyond coding, life has presented me with diverse opportunities. 🎨 From assisting in the electrical industry to organizing memorable catering events for friends and family, I've embraced a variety of experiences. 🛠️🍔 Throughout my journey, I've cultivated essential qualities such as patience, adaptability, and collaboration. 🌟 Achieving Matric with a bachelor's degree while navigating the challenges of remote learning was a significant milestone for me. 🎓💪 As I continue to navigate this exciting path, I'm enthusiastic about leveraging my creativity and skills to make meaningful contributions in the ever-evolving tech landscape and beyond! 🌊💻 Thank you for taking the time to explore my corner of the internet! Feel free to dive in and discover more about my endeavors. 🚀✨
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    // Add animation class to the about element after the component is mounted
    if (window.innerWidth > 300) {
      this.$refs.about.classList.add('slide-in');
    }
  }
}
</script>

<style scoped>
main {
  padding-bottom: 17%;
}

.container {
  margin-top: 75px;
  background-color: rgba(38, 36, 36, 0.541);
}

.about-heading {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 30px;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Define animation */
.slide-in {
  animation: slideInRight 1s forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments */
@media (max-width: 300px) {
  .container {
    margin-top: 25px; 
  }

  .about-heading {
    font-size: 24px;
  }

  .about-text {
    font-size: 1rem; 
    line-height: 1.4;
  }

  /* Remove animation on small screens */
  .slide-in {
    animation: none;
  }
}
</style>

