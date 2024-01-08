<template>
<div class="row">
    <p class="lead">Muakhir Portfolio
        &copy;<span>{{ currYear }}</span>
    </p>
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

</style>