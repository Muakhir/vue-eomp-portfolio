import { createStore } from 'vuex'
const dataUrl = 'https://muakhir.github.io/vue-eomp-data/Data/'
export default createStore({
  state: {
    Home: null,
    About: null,
    education: null,
    skills: null,
    Projects: null,
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
      const response = await fetch(dataUrl)
      const {about} = await response.json()
      context.commit('setAbout', about)
    },
    async getEducation(context) {
      const response = await fetch(dataUrl)
      const data = await response.json()
      context.commit('setEducation', data)
    },
    async getSkills(context) {
      const response = await fetch(dataUrl)
      const data = await response.json()
      context.commit('setSkills', data)
    },
    async getProjects(context) {
      const response = await fetch(dataUrl)
      const data = await response.json()
      context.commit('setProjects', data)
    },
    async getTestimonials(context) {
      const response = await fetch(dataUrl)
      const data = await response.json()
      context.commit('setTestimonials', data)
    },
    async getJobTitle(context) {
      const response = await fetch(dataUrl)
      const data = await response.json()
      context.commit('setJobTitle', data)
    }
  },
  modules: {
  }
})
