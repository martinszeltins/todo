<template>
    <div class="add-todo">
        <v-text-field
            @keyup.enter="addTodo"
            v-model="newTodo"
            solo
            flat
            hide-details
            :placeholder="lang('What needs to be done?')">
        </v-text-field>

        <v-btn
            @click="addTodo"
            depressed
            color="primary"
            class="btn-add">
            {{ lang('Add todo') }}
        </v-btn>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                newTodo: '',
            }
        },

        methods:
        {
            addTodo()
            {
                this.$store.dispatch('todos/add', this.newTodo)
                this.clear()
            },

            clear()
            {
                this.newTodo = ''
            },
        },
    }
</script>

<style scoped>
    .btn-add {
        height: 46px !important;
        margin-left: 20px;
    }

    .add-todo {
        display: flex;
    }

    @media screen and (max-width: 700px) {
        .add-todo {
            display: block;
        }

        .btn-add {
            display: block;
            width: 100%;
            margin-top: 20px;
            margin-left: 0;
        }
    }
</style>