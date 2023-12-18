import { createStore } from "vuex"

const store = createStore({
  state() {  // data
    return {
      lists: ['html', 'css', 'js']
    }
  }
})

export default store