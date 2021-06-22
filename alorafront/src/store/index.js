import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated:false,
    token: '',
    username: ''
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.username = localStorage.getItem('username')
        state.isAuthenticated = true
      } else{
        state.token = ''
        state.username = ''
        state.isAuthenticated = false
      }
    },

    setToken(state,token){
      state.token = token
      state.isAuthenticated = true
    },
    setUsername(state,username){
      console.log("setting usernaeme : " + username);
      state.username = username;
    },
    removeToken(state){
      state.token = ''
      localStorage.setItem('token','')
      state.username = ''
      state.isAuthenticated = false
      console.log('Logged out!')
    }
  },
  actions: {
  },
  modules: {
  }
})
