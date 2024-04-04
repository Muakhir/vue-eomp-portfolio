<template>
    <main class="container-fluid">
        <div class="container">
          <h2 class="d-flex justify-content-center text-light" id="reachme">Reach Me</h2>
        </div>
        <div class="row align-content-center">
          <div class="col">
            <div class="box d-flex justify-content-center">
              <div class="text">
                <h2 id="link"><i class="bi bi-link"></i> Links</h2>
                <span class="text-black">GitHub: </span>
                <a href="https://github.com/Muakhir" target="_blank"><i class="bi bi-github"></i></a><br>
                <span class="text-black">Linkedin: </span>
                <a href="https://www.linkedin.com/in/almuakhir-jones-6996b5300/" target="_blank"><i class="bi bi-linkedin"></i></a><br>
            </div>
            </div>
            <div class="col ">

              <div class="box">
                <div class="text">
  
                  <h2><i class="bi bi-phone"></i> Via Cell</h2>
                  <p class="text-black">0792543014</p>
                </div>
                </div>
                <div class="box">
                  <div class="text">
  
                    <h2><i class="bi bi-envelope-at"></i> Via Email</h2>
                    <a href="mailto:almuakhirjones@gmail.com?" target="_blank" class="email">almuakhirjones@gmail.com</a>
                  </div>
                </div>
            </div>
            </div>
                <div class="col d-flex justify-content-end">
                <div class="contactform">
                  <form @submit.prevent="submitform" action="https://formspree.io/f/xbjnlgoq" method="post" ref="form">
                      <h2 id="ch2">Contact</h2>
                      <div class="inputbox"> 
                        <h6>Name</h6>
                            <input v-model="name" type="text" name="Name" placeholder="Enter Firstname">
                           
                      </div>
                      <div class="inputbox">
                        <h6>Surname</h6>
                        <input v-model="surname" type="text" name="Surname" placeholder="Enter Lastname">
                        
                  </div>
                  <div class="inputbox">
                    <h6>Email</h6>
                    <input v-model="email" type="text" name="Email" placeholder="Email@gmail.com">
                    
                  </div>
                  <div class="inputbox">
                    <h6  id="type">Type your Message...</h6>
                    <textarea v-model="message" placeholder="Don't BE SHY 🙄 "></textarea>
                  </div>
                  <div class="inputbox">
                    <button @click="submit" class="btn" >Submit</button>
                  </div>
                  </form>
                </div>
                </div>
            </div>
      </main>
</template>

<script>
    export default {
        data(){
          return{
            name: "",
            surname: "",
            email: "",
            message:""
          }
        },
        methods: {
          submitform(){
            if(!this.name.trim() || !this.surname.trim() || !this.email.trim() || !this.message.trim()){
              alert('Please enter your Info')
            }
            this.$refs.form.submit
          }
        }
    }
</script>

<style scoped>
main{
    color: rgb(255, 255, 255);
    min-height: 100vh;
}
.box {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: rgba(38, 36, 36, 0.541);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 25px;
  }
  .contactform {
    margin-top: 20px;
    background-image: linear-gradient(#F6B342,black);
    padding: 5px;
    border-radius: 10px;
    width: 100%; /* Adjusted width to 100% */
    max-width: 500px; /* Added max-width for responsiveness */
    margin-bottom: 50px;
  }
  .inputbox {
    padding: 10px;
  }
  input, textarea {
    padding: 5px;
    border:1px solid #fff;
    border-radius: 15px;
    color: #F6B342;
    text-align: center;
    width: 100%; /* Adjusted width to 100% */
    max-width: 400px; /* Added max-width for responsiveness */
  }
  input:hover{
    background-color: #545454ac;
  }
  input:hover::placeholder{
    background-color: #545454ac;
    color: #F6B342;
  }
  .btn:hover{
    background-color: #545454ac;
    color: #F6B342;
  }
  .btn{
    background-color: #fff;
  }
  textarea:hover{
    background-color: #545454ac;
  }
  textarea:hover::placeholder{
    color: #F6B342;
  }
  ::placeholder{
    color:#080808;
  }
i{
    color: rgb(17, 16, 16);
}

a i:hover{
  color: #fff;
}

.email:hover{
  color: #fff;
}

.email{
  color: #000;
}
</style>
