<template>
  <main class="container-fluid">
    <div>
      <NavBar/>
    </div>
  <router-view/>
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

    export default{
    component:{
      NavBar
    },
    components: {NavBar}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav:hover {
  color: #040404;
}
</style>
