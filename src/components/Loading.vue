<template>
    <div
        v-if="store.todos.isLoading"
        class="loading">

        <v-progress-linear
            indeterminate
            height="10"
            color="cyan">
        </v-progress-linear>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                store: this.$store.state,
            }
        },
    }
</script>

<style scoped>
    .loading {
        width: 80%;
        margin: 50px auto;
    }
</style>