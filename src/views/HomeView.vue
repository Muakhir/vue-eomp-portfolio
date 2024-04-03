<template>
  <main class="container-fluid">
    <section class="home">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div class="text-container text-center mb-4">
              <h1 class="h1" ref="welcomeText">Welcome to my Portfolio</h1>
              <h1 class="h1" ref="nameText">My name is Al-Mu'akhir Jones</h1>
              <h1 class="h1" ref="roleText">An aspiring <span id="hlight" class="glowing-text">Full-Stack Developer</span></h1>
              <a class="btn btn-custom" :href="pdfUrl" download="portfolio.pdf" target="_blank">Download CV</a>
            </div>
          </div>
          <div class="col-md-6">
            <!-- Apply unique animation to this image -->
            <img class="Himg img-fluid" ref="profileImage" src="https://iili.io/J7m9yib.jpg" loading="lazy" alt="">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      pdfUrl: 'https://drive.google.com/file/d/1nrZXa04NUJbh0JZhVTBa2LNbtHW7Ehn6/view?usp=drive_link',
      tiltAngle: 15 // Initial tilt angle, adjust for desired intensity
    };
  },
  mounted() {
    // Animate elements using Anime.js
    anime({
      targets: this.$refs.welcomeText,
      opacity: [0, 1],
      translateY: ['-20px', '0'],
      easing: 'easeInOutQuad',
      duration: 1500 // Increase duration for smoother animation
    });

    anime({
      targets: this.$refs.nameText,
      opacity: [0, 1],
      translateY: ['-20px', '0'],
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: 500 // Delay animation by 500ms
    });

    anime({
      targets: this.$refs.roleText,
      opacity: [0, 1],
      translateY: ['-20px', '0'],
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: 1000 // Delay animation by 1000ms
    });

    anime({
      targets: this.$refs.profileImage,
      translateX: [
        { value: '+=50px', duration: 1000 },
        { value: '-=100px', duration: 1000 },
        { value: '+=50px', duration: 1000 },
        { value: '+=100px', duration: 1000 },
        { value: '-=50px', duration: 1000 },
        { value: '-=100px', duration: 1000 },
        { value: '+=50px', duration: 1000 },
        { value: '+=100px', duration: 1000 },
        { value: '-=50px', duration: 1000 }
      ],
      translateY: [
        { value: '+=50px', duration: 1000 },
        { value: '-=100px', duration: 1000 },
        { value: '+=50px', duration: 1000 },
        { value: '+=100px', duration: 1000 },
        { value: '-=50px', duration: 1000 },
        { value: '-=100px', duration: 1000 },
        { value: '+=50px', duration: 1000 },
        { value: '+=100px', duration: 1000 },
        { value: '-=50px', duration: 1000 }
      ],
      easing: 'easeInOutQuad',
      loop: true
    });

    const btn = this.$el.querySelector('.btn-custom');

    btn.addEventListener('mouseenter', () => {
      anime({
        targets: btn,
        scale: 1.1,
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });

    btn.addEventListener('mouseleave', () => {
      anime({
        targets: btn,
        scale: 1,
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });
  }
}
</script>


<style scoped>
.h1 {
  padding-bottom: 10px; 
}
main {
  padding-bottom: 5%;
}

.show-720 {
    display: none;
  }

.Himg {
  margin-bottom: 50px;
  max-width: 400px;
  margin-top: 40px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.633);
  transition: 0.5s ease-in-out;
  border: 2px solid #a59797;
}

.Himg {
  /* Apply holographic effect */
  filter: drop-shadow(0 0 10px #9e6b19);
}
.Himg:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.559);
}

.text-container {
  margin-top: 50px;
}

@media (max-width: 720px) {
  img {
    width: 300px;
    height: 250px;
  }
}

@media (max-width: 300px) {
  img {
    width: 100%;
    height: auto;
  }
}

.glowing-text {
  animation: glow 1s infinite alternate;
}

@keyframes glow {
  0% {
    color: rgb(241, 201, 59);
  }
  25% {
    color: rgb(171, 151, 41);
  }
  50% {
    color: rgb(194, 197, 51);
  }
  75% {
    color: #9e6b19;
  }
  100% {
    color: rgb(205, 189, 172);
  }
}

.btn-custom {
  color: white;
  background-color: rgba(58, 55, 55, 0.493);
  transition: transform 0.5s ease;
}

.btn-custom:hover {
  color: #9e6b19;
  background-color: rgba(58, 55, 55, 0.493);
  transform: scale(1.1);
}
</style>









