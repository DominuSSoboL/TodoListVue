<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <v-flex 
                xs12
                sm6
                md4
                v-for="todo of todos"
                :key="todo.id"
            >
                <v-card>
                    <v-card-title class="blue white--text">
                        <span class="headline">{{todo.todoTotle}}</span>

                        <v-spacer></v-spacer>

                        <v-btn icon dark>
                            <v-icon>create</v-icon>
                        </v-btn>
                        <v-btn icon dark>
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-card-title>


                    <v-divider></v-divider>

                    <v-list
                    subheader
                    two-line
                    v-for="task of todo.tasks"
                    :key="task.id"
                    >

                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-tile-action>

                            <v-list-tile-content @click="notifications = !notifications">
                                <v-list-tile-title>{{task.taskTitle}}</v-list-tile-title>
                                <v-list-tile-sub-title>{{task.deadline}}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-spacer></v-spacer>
                            <v-menu
                                transition="slide-x-transition"
                                bottom 
                                right>
                                <v-btn
                                    slot="activator"
                                    white
                                    icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>

                                <v-list>
                                    <v-list-tile @click="">
                                        <v-btn
                                            icon 
                                            greay>
                                            <v-icon class="ml-1">create</v-icon>
                                        </v-btn>
                                    </v-list-tile>

                                    <v-list-tile @click="">
                                         <v-btn
                                            icon
                                            white>
                                            <v-icon class="mr-1">delete</v-icon>
                                        </v-btn>
                                    </v-list-tile>

                                </v-list>
                            </v-menu>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                todos: [
                    {
                        todoTotle: 'For home',
                        colorScheme: '',
                        id: 1,
                        tasks: [
                            {
                                mark: false,
                                taskTitle: 'Learn Vue',
                                deadline: '19.02.2019',
                                url: '',
                                id: '1'
                            },                            
                            {
                                mark: false,
                                taskTitle: 'Learn Vuex',
                                deadline: '19.02.2019',
                                url: '',
                                id: '2'
                            },                            
                            {
                                mark: false,
                                taskTitle: 'Learn vuetify',
                                deadline: '19.02.2019',
                                url: '',
                                id: '3'
                            }
                        ]
                    },
                    {
                        todoTotle: 'For work',
                        colorScheme: '',
                        id: 2,
                        tasks: [
                            {
                                mark: false,
                                taskTitle: 'Drink coffee',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            },                            
                            {
                                mark: false,
                                taskTitle: 'Make my work',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            },                            
                            {
                                mark: false,
                                taskTitle: 'Do something',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            },                            
                            {
                                mark: false,
                                taskTitle: 'Make Awesom App',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            }
                        ]
                    },
                    {
                        todoTotle: 'For work',
                        colorScheme: '',
                        id: 2,
                        tasks: [
                            {
                                mark: false,
                                taskTitle: 'Drink coffee',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            }
                        ]
                    },
                    {
                        todoTotle: 'For work',
                        colorScheme: '',
                        id: 2,
                        tasks: [
                            {
                                mark: false,
                                taskTitle: 'Drink coffee',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            },                            
                            {
                                mark: false,
                                taskTitle: 'Make my work',
                                deadline: '19.02.2019',
                                url: '',
                                id: ''
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>