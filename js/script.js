const { createApp } = Vue

createApp({
    data() {
        return {
            newToDo:
            {
                text: "",
                done: false
            },
            checked: "checked",
            delete: "delete",
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
    },
    methods: {
        addToDo: function () {
            const copyToDo = { ...this.newToDo };
            this.todoList.push(copyToDo);
            this.newToDo.text = ""
        },
        submit: function () {
            const copyToDo = { ...this.newToDo };
            this.todoList.push(copyToDo);
            this.newToDo.text = ""
        },
        invertClass: function(index) {
            if (this.todoList[index].done === false) {
                this.todoList[index].done = true;
            } else {
                this.todoList[index].done = false
            }
        }
    },
}).mount('#app')
