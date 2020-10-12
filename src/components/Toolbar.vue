<template>
    <v-card class="toolbar">
        <v-toolbar
            dark
            src="/img/vbanner.jpg">

            <v-toolbar-title>Todo</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="changeLanguage">
                {{ otherLanguage }}
            </v-btn>

            <v-btn
                @click="toggleTheme"
                icon
                class="dark-mode-toggle">

                <span class="material-icons">
                    {{ store.app.theme == 'light' ? 'nights_stay' : 'wb_sunny' }}
                </span>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        data()
        {
            return {
                store: this.$store.state,
            }
        },

        methods:
        {
            changeLanguage()
            {
                this.$store.dispatch('app/changeLanguage')
            },

            toggleTheme()
            {
                this.$store.dispatch('app/toggleTheme')
            },
        },

        computed:
        {
            otherLanguage()
            {
                return this.$store.getters['app/otherLanguage']
            },
        },
    }
</script>

<style scoped>
    .toolbar.v-sheet.v-card {
        border-radius: 0;
    }

    .dark-mode-toggle {
        margin-right: 6px !important;
    }
</style>