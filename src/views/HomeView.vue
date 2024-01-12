<template>
  <section class="home">
    <div class="container-fluid">
      <div class="row me-5 ms-5">
        <div class="col typewriter">
          <h1 class="h1 typing-animation">Welcome to my Portfolio</h1>
          <h1 class="h1 typing-animation">My name is Al-Mu'akhir Jones</h1>
          <h1 class="h1 typing-animation">An aspiring Full-Stack Developer</h1>
        </div>

        <div class="col mt-5">
          <img class="Himg img-fluid" src="https://iili.io/J7m9yib.jpg" loading="lazy" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.Himg {
  width: 370px;
  border-radius: 25px;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  20% { border-color: rgba(99, 145, 183, 0); }
}

.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(20, end), blink-caret 0.75s step-end infinite;
}
h1{
  padding: 30px;
}
.typewriter{
  margin-top: 150px;
}
@media (max-width: 660px){
  h1{
    font-size: 30px;
  }
}
@media (max-width: 500px){
  h1{
    font-size: 20px;
    padding: 20px;
  }
  .typewriter{
    margin-top: 50px;
  }
}
@media (max-width: 400px){
  h1{
    font-size: 14px;
  }
  .typewriter{
    margin-top: 50px;
  }
}
@media (max-width: 300px){
  h1{
    font-size: 7.5px;
  }
  .typewriter{
    margin-top: 50px;
  }
}

</style>

