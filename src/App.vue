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
  <div><Footer/></div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: grey;
}

nav {
  padding: 30px;
  font-size: larger;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.logo{
  width: 110px;
  height: 30px;
}


</style>
