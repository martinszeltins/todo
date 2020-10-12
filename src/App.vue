<template>
    <v-app class="todo-app">
        <toolbar />

        <add-todo />

        <todos />
    </v-app>
</template>

<script>
    import Todos from './components/Todos.vue'
    import Toolbar from './components/Toolbar.vue'
    import AddTodo from './components/AddTodo.vue'

    export default {
        components:
        {
            'toolbar': Toolbar,
            'todos': Todos,
            'add-todo': AddTodo,
        },
    }
</script>

<style>
    .flex {
        display: flex;
    }

    .todo-app {
        background: #f1f1f1 !important;
    }
</style>