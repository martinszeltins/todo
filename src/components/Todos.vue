<template>
    <div class="todos-container">
        
        <!-- Add new todo -->
        <add-todo />


        <!-- Loading -->
        <div
            v-if="store.todos.isLoading"
            class="loading">

            <v-progress-linear
                indeterminate
                height="10"
                color="cyan">
            </v-progress-linear>
        </div>


        <!-- Todos -->
        <todo
            v-for="todo in store.todos.todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import Todo from './Todo.vue'
import AddTodo from './AddTodo.vue'

export default {
    components:
    {
        'todo': Todo,
        'add-todo': AddTodo,
    },

    data()
    {
        return {
            store: this.$store.state,
            newTodo: '',
        }
    },

    methods:
    {
        updateTodo(value, todo)
        {
            this.$store.dispatch('todos/updateCompleted', {
                id: todo.id,
                completed: !!value,
            })
        },

        deleteTodo(todo)
        {
            this.$store.dispatch('todos/delete', todo)
        },
    },

    created()
    {
        this.$store.dispatch('todos/fetch')
    },
}
</script>

<style scoped>
    .todos-container {
        margin: 50px 100px 0 100px;
    }

    .loading {
        width: 80%;
        margin: 50px auto;
    }

    @media screen and (max-width: 700px) {
        .todos-container {
            margin: 50px 20px 0 20px;
        }
    }
</style>