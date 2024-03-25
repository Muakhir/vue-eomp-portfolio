<template>
  <main class="container-fluid">
    <div>
      <NavBar/>
    </div>
  <router-view/>
  <Footer/>
  </main>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/reachme">Reach Me</router-link>
  </nav> -->
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import Footer from './components/Footer.vue';

    export default{
    component:{
      NavBar,
      Footer
    },
    components: {NavBar,Footer}
  }
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 254, 254);
  background-image: url("https://iili.io/J7b9TmX.png");
  background-size: cover; 
  height: auto;
}
nav {
  padding: 30px;
  font-size: larger;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}



</style>
