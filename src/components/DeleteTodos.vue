<template>
    <v-btn
        @click="deleteSelected"
        depressed
        color="primary"
        class="delete-btn">
        
        {{ lang('Delete selected') }} ({{ selectedCount }})
    </v-btn>
</template>

<script>
    export default {
        methods:
        {
            deleteSelected()
            {
                this.$store.dispatch('todos/deleteSelected')
            },
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

<style scoped>
    .delete-btn {
        width: 100%;
        height: 60px !important;
    }
</style>