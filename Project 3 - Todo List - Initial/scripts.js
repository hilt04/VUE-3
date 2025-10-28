const handlingForms = {

    data() {
        return {
            todos: [],
            newTodo: {
                text: '',
                done: false
            }
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.text.trim() !== '') {
                this.todos.push({
                    text: this.newTodo.text,
                    done: false
                });
                this.newTodo.text = '';
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');