<template>
    <div class="todos-container">
        
        <!-- Add new todo -->
        <div class="flex">
            <v-text-field
                @keyup.enter="addTodo"
                v-model="newTodo"
                solo
                flat
                placeholder="What needs to be done?">
            </v-text-field>

            <v-btn
                @click="addTodo"
                depressed
                color="primary"
                class="btn-add">
                Add todo
            </v-btn>
        </div>


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
        <v-card
            v-for="todo in store.todos.todos"
            :key="todo.id"
            class="todo"
            flat>

            <div class="check-todo">
                <v-checkbox
                    @change="updateTodo($event, todo)"
                    dense
                    :input-value="todo.completed">
                </v-checkbox>
            </div>

            <div
                class="todo-description"
                :class="{ completed: todo.completed }">
                {{ todo.id }}. {{ todo.title }}
            </div>

            <div>
                <span class="material-icons todo-edit">
                    create
                </span>
            </div>

            <div class="todo-delete">
                <v-icon @click="deleteTodo(todo)">
                    mdi-delete
                </v-icon>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
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

        addTodo()
        {
            this.$store.dispatch('todos/add', this.newTodo)
            this.clear()
        },

        clear()
        {
            this.newTodo = ''
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

    .todo {
        padding: 20px 20px;
        margin-bottom: 10px;
        display: flex;
    }

    .btn-add {
        height: 46px !important;
        margin-left: 20px;
    }

    .todo-description {
        flex: 1;
        margin-left: 35px;
    }

    .loading {
        width: 80%;
        margin: 50px auto;
    }

    .check-todo {
        position: absolute;
        top: -1px;
    }

    .completed {
        text-decoration: line-through;
    }

    .todo-edit {
        color: gray;
        font-size: 22px;
        position: relative;
        top: 2px;
        margin-right: 10px;
        cursor: pointer;
    }
</style>