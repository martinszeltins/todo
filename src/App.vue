<template>
    <v-app class="todo-app">
        <toolbar />

        <div class="add-todo">
            <add-todo />
        </div>

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

    .add-todo {
        margin: 30px 50px 15px 50px;
    }

    @media screen and (max-width: 700px) {
        .add-todo {
            margin: 30px 20px 0px 20px;
        }
    }
</style>