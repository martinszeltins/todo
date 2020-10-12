<template>
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
</style>