<template>
    <v-app class="todo-app">
        <toolbar />
        <todos />
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar.vue'
    import Todos from './components/Todos.vue'

    export default {
        components:
        {
            'toolbar': Toolbar,
            'todos': Todos,
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