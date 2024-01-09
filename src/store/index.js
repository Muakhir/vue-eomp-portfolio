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
      const response = await fetch(dataUrl)
      const {about} = await response.json()
      context.commit('setAbout', about)
    },
    async getEducation(context) {
      const response = await fetch(dataUrl)
      const {education} = await response.json()
      context.commit('setEducation', education)
    },
    async getSkills(context) {
      const response = await fetch(dataUrl)
      const {skills} = await response.json()
      context.commit('setSkills', skills)
    },
    async getProjects(context) {
      const response = await fetch(dataUrl)
      const {projects} = await response.json()
      context.commit('setProjects', projects)
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
