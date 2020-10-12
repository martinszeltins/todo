<template>
    <v-app :data-theme="store.app.theme" class="todo-app">

        <toolbar />

        <div class="main-container add-todos">
            <add-todo />
        </div>

        <todos />

        <div
            v-if="!store.todos.isLoading && selectedCount > 1"
            class="main-container">

            <delete-todos />
        </div>

    </v-app>
</template>

<script>
    import Todos from './components/Todos.vue'
    import Toolbar from './components/Toolbar.vue'
    import AddTodo from './components/AddTodo.vue'
    import DeleteTodos from './components/DeleteTodos.vue'

    export default {
        components:
        {
            'toolbar': Toolbar,
            'todos': Todos,
            'add-todo': AddTodo,
            'delete-todos': DeleteTodos,
        },

        data()
        {
            return {
                store: this.$store.state,
            }
        },

        computed:
        {
            selectedCount()
            {
                return this.$store.getters['todos/selectedCount']
            },
        },
    }
</script>

<style>
    html {
        overflow-y: auto;
    }
    
    .flex {
        display: flex;
    }

    .todo-app {
        background: #f1f1f1 !important;
    }

    .main-container.add-todos {
        margin-bottom: 30px;
        margin-top: 50px;
    }

    .main-container {
        margin: 30px 100px 15px 100px;
    }

    .delete-todos {
        width: 100%;
        margin: 30px 50px 15px 50px;
    }

    @media screen and (max-width: 700px) {
        .main-container {
            margin: 30px 20px 0px 20px;
        }

        .main-container.add-todos {
            margin-bottom: 0px;
        }
    }
</style>