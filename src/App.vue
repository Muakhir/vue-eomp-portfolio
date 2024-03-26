<template>
  <div id="app">
    <main class="container-fluid">
      <div>
        <NavBar/>
      </div>
      <router-view/>
      <Footer/>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&display=swap');

#app {
  font-family: "Ysabeau SC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: url("https://iili.io/J7b9TmX.png");
  background-size: cover; 
  max-height: auto;
}

nav {
  padding: 30px;
  font-size: larger;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

::-webkit-scrollbar{
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255); 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background:linear-gradient(72.5deg, #9e6b19 30%, #38383d6d 79%);; 
  border-radius: 10px;
}
</style>

