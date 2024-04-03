<template>
  <main class="container-fluid">
    <footer class="footer">
        <div class="row">
          <div class="col">
            <p class="lead fw-bold">© {{ currYear }} AL-Mu'akhir Jones. All rights reserved.</p>
          </div>
        </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      currYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(90, 90, 89, 0.537);
  padding: 10px 0;
  z-index: 999; /* Ensures the footer stays above other content */
}

.footer h5 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 26px;
}

.footer p {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 5px;
}

.social-links {
  margin-top: 10px;
}

.social-link {
  font-size: 24px;
  margin-right: 10px;
  color: #ffffff;
}

.social-link:hover {
  color: #f6cf42;
}
</style>


  
  