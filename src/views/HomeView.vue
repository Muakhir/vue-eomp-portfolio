<template>
  <main>
    <section class="home">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div class="text-container text-center mb-4">
              <h1 class="h1 fade-in-animation">Welcome to my Portfolio</h1>
              <h1 class="h1 fade-in-animation" style="animation-delay: 0.5s;">My name is Al-Mu'akhir Jones</h1>
              <h1 class="h1 fade-in-animation" style="animation-delay: 1s;">An aspiring Full-Stack Developer</h1>
            </div>
          </div>
          <div class="col-md-6">
            <img class="Himg img-fluid slide-in-right" src="https://iili.io/J7m9yib.jpg" loading="lazy" alt="">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.h1{
  padding-bottom: 20px; 
}
main {
  min-height: 100vh;
}

.Himg {
  margin-bottom: 50px;
  max-width: 400px;
  margin-top: 80px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.633);
  transition: 0.3s ease-in-out;
  border: 2px solid #ccc; /* Adding border */
}

.Himg:hover {
  transform: scale(1.5);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.559);
}

.fade-in-animation {
  opacity: 0;
  animation: fade-in 1s ease-in forwards;
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

.slide-in-right {
  opacity: 0;
  animation: slide-in-right 1s ease-in forwards;
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

@media (max-width: 992px) {
  .text-container {
    margin-top: 20px;
  }
}

@media (max-width: 1080px) {
  .text-container {
    margin-top: 20px;
  }
  main{
    height: 130vh;
  }
}

@media (max-width: 768px) {
  .text-container {
    margin-top: 10px;
  }
  img {
    width: 250px;
    height: 300px;
  }
}

@media (max-width: 576px) {
  .text-container {
    margin-top: 0;
  }
}

@media (max-width: 576px) {
  .text-container {
    margin-top: 0;
  }

  .Himg {
    margin-top: 20px;
  }
}
</style>







