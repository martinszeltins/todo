<template>
    <v-card
        class="todo"
        flat>

        <!-- Check -->
        <div class="check-todo">
            <v-checkbox
                @change="updateTodo($event, todo)"
                dense
                :input-value="todo.completed">
            </v-checkbox>
        </div>

        <!-- Title -->
        <div
            class="todo-description"
            :class="{ completed: todo.completed }">
            
            <div v-show="!isEditing">
                {{ todo.id }}. {{ todo.title }}
            </div>

            <div v-show="isEditing">
                <input
                    @input="onTodoEdit"
                    @keyup.enter="isEditing = false"
                    type="text"
                    ref="editTodoInput"
                    class="edit-todo-input"
                    :value="todo.title"
                />
            </div>
        </div>

        <!-- Edit -->
        <div>
            <span
                @click="startEditing"
                class="material-icons todo-edit">
                create
            </span>
        </div>

        <!-- Delete -->
        <div class="todo-delete">
            <v-icon @click="deleteTodo(todo)">
                mdi-delete
            </v-icon>
        </div>
    </v-card>
</template>

<script>
export default {
    props:
    {
        todo: {
            type: Object,
        },
    },

    data()
    {
        return {
            isEditing: false,
        }
    },

    methods:
    {
        onTodoEdit(event)
        {
            this.$store.dispatch('todos/updateTodo', {
                id: this.todo.id,
                title: event.target.value,
            })
        },

        async startEditing()
        {
            this.isEditing = !this.isEditing

            await this.$nextTick()

            this.$refs.editTodoInput.focus()
            this.$refs.editTodoInput.select()
        },

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
}
</script>

<style scoped>
    .todo {
        padding: 20px 20px;
        margin-bottom: 10px;
        display: flex;
    }

    .todo-description {
        flex: 1;
        margin-left: 35px;
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

    .edit-todo-input {
        width: 98%;
        background: #f4f4f4;
        padding: 0px 10px;
        border-radius: 6px;
    }

    .edit-todo-input:focus {
        outline: none;
    }
</style>