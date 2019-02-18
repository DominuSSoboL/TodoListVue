<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.taskTitle}}</h1>
                        <p>{{ad.deadline}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        
                        <router-link 
                            class="v-btn theme--light primary"
                            tag="button"
                            title="Back to home"
                            :to="'/'">
                                Back
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        ad () {
            const id = this.id
            return this.$store.getters.adTaskDetails(id)
        }
    }
}
</script>