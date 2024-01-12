<template>
<div class="container bg-light">
<div class="row">
    <p class="lead fw-bolder d-flex justify-content-center">AL-Mu'akhir Jones Portfolio
        &copy;<span>{{ currYear }}</span>
    </p>
</div>
</div>
</template>

<script>
export default {
name:'FooterComp',
data(){
    return{
        currYear: new Date().getFullYear()
    }
}
}
</script>

<style scoped>
p{
    color: #2c3e50;
}
p:hover{
    color: #F6B342;
}
.container{
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}
</style>