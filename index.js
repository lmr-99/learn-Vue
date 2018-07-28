let hello = new Vue({
    el: '#hello',
    data: {
        message: "Hello Vue!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
let app = new Vue({
    el: '#app',
    data: {
        seen: true
    }
});
app.seen = false;
let list = new Vue({
    el:"#list",
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});
list.todos.push({ text: 'New thing' });
let usr = new Vue({
    el: '#user',
    data: {
        message: "Hello World"
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template:'<li>{{ todo.text }}</li>'
});

let todo = new Vue({
    el: '#todo',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Fruit' }
        ]
    }
});