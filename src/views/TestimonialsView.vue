<template>
    <main>
        <div>
            <h2 class="d-flex justify-content-center hed">Testimonials</h2>
            <transition-group name="slide">
                <div class="container-fluid row justify-content-center Tard" v-if="testimonials">
                    <div v-for="testy in testimonials" class="card" :key="testy.name">
                        <img :src="testy.profile" class="card-img" alt="..." width="300" height="300">
                        <div class="card-body">
                            <h5 class="card-title">{{ testy.name }} {{ testy.surname }}</h5>
                            <p>{{ testy.quotes }}</p>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials;
        }
    },
    mounted() {
        this.$store.dispatch('getTestimonials')
    }
}
</script>

<style scoped>
main{
    padding-bottom: 50px;
}
.Tard {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 20px;
}

.card:hover {
    background-color: rgb(3, 3, 3);
    color: #F6B342;
    box-shadow: 5px 15px 10px rgb(65, 54, 7);
}

.card {
    margin-bottom: 100px;
    height: 105vh;
    max-width: 21rem;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.744);
    background-color: rgba(38, 36, 36, 0.541);
    padding: 10px;
    color: #fff;
    animation: slideIn 0.5s ease-in-out; /* Add animation */
}

.card-img {
    width: 100%;
    height: 400px;
    border-radius: 15px;
    padding: 5px;
}

.hed {
    padding: 15px;
}

@media (max-width: 770px) {
    .Tard {
        gap: 0.5rem;
    }
    .card-img{
        height: 300px;
    }
}

@media (max-width: 650px) {
    .Tard {
        align-items: center;
        margin-left: 4px;
    }
    .card-img{
        height: 200px;
    }
    .card{
        width: 16rem;
    }
    /* Remove animation for smaller screens */
    .card {
        animation: none; /* Disable animation */
    }
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.slide-enter-active {
    animation: slideIn 0.5s ease-in-out;
}
</style>



