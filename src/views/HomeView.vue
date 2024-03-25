<template>
  <main>
    <section class="home">
      <div class="container-fluid">
        <div class="row me-5 ms-5">
          <div class="col">
            <div class="text-container">
              <h1 class="h1 fade-in-animation">Welcome to my Portfolio</h1>
              <h1 class="h1 fade-in-animation" style="animation-delay: 0.5s;">My name is Al-Mu'akhir Jones</h1>
              <h1 class="h1 fade-in-animation" style="animation-delay: 1s;">An aspiring Full-Stack Developer</h1>
            </div>
          </div>
  
          <div class="col mt-5">
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
main {
  height: 85vh;
}

.Himg {
  max-width: 400px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.Himg:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
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
  margin-top: 150px;
}

.text-container h1 {
  padding-bottom: 20px;
}

@media (max-width: 660px) {
  .text-container {
    margin-top: 50px;
  }
}

@media (max-width: 500px) {
  .text-container {
    margin-top: 50px;
  }
}

@media (max-width: 400px) {
  .text-container {
    margin-top: 50px;
  }
}

@media (max-width: 300px) {
  .text-container {
    margin-top: 50px;
  }
}
</style>




