<template>
<div class="container">
<div class="row">
    <p class="lead fw-bolder">AL-Mu'akhir Jones Portfolio
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
    position: relative;
    bottom: 0;
}
</style>