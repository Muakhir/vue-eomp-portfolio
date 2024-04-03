<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/">
        <img class="navbar nav logo" src="https://iili.io/JNz0O7e.png" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reachme">Reach Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar-nav .nav-link:hover {
  color: gold;
  text-decoration: none;
}

.navbar {
  color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgba(86, 85, 85, 0.584);
}

.logo {
  background-color: rgba(86, 85, 85, 0);
  color: #fff;
  width: 100px;
  border-radius: 15%;
  animation: scaleAnimation 1s ease-in-out infinite alternate;
}

.nav-link {
  color: #fff;
  text-decoration: none;
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>


