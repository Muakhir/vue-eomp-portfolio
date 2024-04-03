<template>
  <main class="container-fluid">
    <section class="home">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div class="text-container text-center mb-4">
              <h1 class="h1 fade-in-animation">Welcome to my Portfolio</h1>
              <h1 class="h1 fade-in-animation" style="animation-delay: 0.5s;">My name is Al-Mu'akhir Jones</h1>
              <h1 class="h1 fade-in-animation" style="animation-delay: 1s;">An aspiring <span id="hlight" class="glowing-text">Full-Stack Developer</span></h1>
              <a class="btn btn-custom" :href="pdfUrl" download="portfolio.pdf">Download CV</a>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center"> <!-- Updated class -->
            <img class="Himg img-fluid slide-in-right" src="https://iili.io/J7m9yib.jpg" loading="lazy" alt="">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: 'https://drive.google.com/file/d/1nrZXa04NUJbh0JZhVTBa2LNbtHW7Ehn6/view?usp=drive_link'
    };
  }
}
</script>

<style scoped>
@media (max-width: 767px) { /* Adjustments for smaller screens */
  .fade-in-animation, .slide-in-right {
    animation: none; /* Disable animations on smaller screens */
  }
}

@media (min-width: 768px) { /* Only apply animations on larger screens */
  .fade-in-animation {
    opacity: 0;
    animation: fade-in 1s ease-in forwards;
  }

  .slide-in-right {
    opacity: 0;
    animation: slide-in-right 1s ease-in forwards;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.text-container {
  margin-top: 50px;
}

.Himg {
  margin-bottom: 50px;
  max-width: 100%; /* Ensure image responsiveness */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.633);
  transition: 0.5s ease-in-out;
  border: 2px solid #a59797;
}

.Himg:hover {
  transform: scale(1.5);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.559);
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
</style>








