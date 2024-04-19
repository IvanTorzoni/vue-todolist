const { createApp } = Vue

createApp({
  data() {
    return {
        todoList: [
            {
                text: "Recruiting blog post",
                done: true
            },
            {
                text: "Mobile app luaunch",
                done: true
            },
            {
                text: "Interview John H.",
                done: false
            },
            {
                text: "Summit update to mobile storefronts",
                done: true
            },
        ]
    }
  }
}).mount('#app')
