import { createStore } from 'vuex'
const dataUrl = 'https://muakhir.github.io/vue-eomp-data/Data/'
export default createStore({
  state: {
    Home: null,
    About: null,
    education: null,
    skills: null,
    projects: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setHome(state, value) {
      state.home = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    }
  },
  actions: {
    async getAbout(context) {
      try{
        const response = await fetch(dataUrl)
        const {about} = await response.json()
        context.commit('setAbout', about)
      }
      catch(error){
        console.error('Error fetching About');
      }
    },
    async getEducation(context) {
      try{
        const response = await fetch(dataUrl)
        const {education} = await response.json()
        context.commit('setEducation', education)
      }
      catch(error){
        console.error('Error fetching Education');
      }
    },
    async getSkills(context) {
      try{
        const response = await fetch(dataUrl)
        const {skills} = await response.json()
        context.commit('setSkills', skills)
      }
      catch(error){
        console.error('Error Fetching Skills');
      }
    },
    async getProjects(context) {
      try{
        const response = await fetch(dataUrl)
        const {projects} = await response.json()
        context.commit('setProjects', projects)
      }
      catch(error){
        console.error('Error Fetching Projects');
      }
    },
    async getTestimonials(context) {
      try{
        const response = await fetch(dataUrl)
        const {testimonials} = await response.json()
        context.commit('setTestimonials', testimonials)
      }
      catch(error){
        console.error('Error Fetching Testsimonials');
      }
    }
  },
  modules: {
  }
})
