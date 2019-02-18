<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <v-flex 
                xs12
                sm6
                md4
                v-for="todo of todos"
                :key="todo.id">
                <v-card>
                    <v-card-title class="blue white--text">
                        <v-btn 
                            icon 
                            dark
                            title="Add task for todo list"
                            >
                            <v-icon>playlist_add</v-icon>
                        </v-btn>
                        <span class="headline">{{todo.todoTotle}}</span>

                        <v-spacer></v-spacer>

                        <v-btn 
                            icon 
                            dark
                            title="Editing title todo"
                            @click="editTodosTitleOpenModal(todo.id)">
                            <v-icon>create</v-icon>
                        </v-btn>
                        <v-btn 
                            icon 
                            dark
                            title="Delete todo list"
                            @click="deleteTodosOpenModal(todo.id)">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-card-title>


                    <v-divider></v-divider>

                    <v-list
                        subheader
                        two-line
                        v-for="task of todo.tasks"
                        :key="task.id">

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
                                            white
                                            >
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

        <!-- MODAL EDITE TITLE TODOS -->
        <v-dialog
            v-model="editTodosTitleModal"
            width="500">
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    Edit title for todo list
                </v-card-title>

                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>

                        <v-flex xs12>
                            <v-form ref="form" validation>
                            <v-text-field
                                class="mb-4"
                                name="title"
                                label="Enter New Title"
                                type="text"
                                v-model="newTitleTodos"
                            ></v-text-field>
                            </v-form>
                        </v-flex>

                    </v-layout>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            flat
                            @click="editTodosTitle">
                            EDIT
                        </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>

        <!-- MODAL EDITE TITLE TODOS -->
        <v-dialog
            v-model="editTodosTitleModal"
            width="500">
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    Edit title for todo list
                </v-card-title>

                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>

                        <v-flex xs12>
                            <v-form ref="form" validation>
                            <v-text-field
                                class="mb-4"
                                name="title"
                                label="Enter New Title"
                                type="text"
                                v-model="newTitleTodos"
                            ></v-text-field>
                            </v-form>
                        </v-flex>

                    </v-layout>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            flat
                            @click="editTodosTitle">
                            EDIT
                        </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>


        <!-- MODAL ACCEPT DELETE TODOS -->
        <v-dialog
            v-model="deleteTodosModal"
            width="500">
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    Todolis removal
                </v-card-title>

                <v-card-text>
                    Are you sure you want to delete the list? Once deleted, it cannot be restored.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                        <v-btn
                            color="primary"
                            flat
                            @click="deleteTodosModal = false">
                            No I do not want
                        </v-btn>
                    <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            flat
                            @click="deleteTodo">
                            Yes, I want
                        </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
               todos: this.$store.state.todos,
               correctTodosId: this.$store.state.correctTodosId,
               deleteTodosModal: false,
               editTodosTitleModal: false,
               newTitleTodos: '',
               activeListId: 0,
               notifications: false
            }
        },
        methods: {
            deleteTodosOpenModal(id) {
                this.deleteTodosModal = true;
                this.activeListId = id
            },
            deleteTodo () {
                const idx = this.$store.state.todos.findIndex((el) => el.id === this.activeListId )
                this.deleteTodosModal = false
                this.$store.state.todos.splice(idx, 1);
                console.log( this.$store.state.todos.length);
            },
            editTodosTitleOpenModal (id) {
                this.editTodosTitleModal = true;
                this.activeListId = id
            },
            editTodosTitle() {
                this.$store.state.todos[this.activeListId].todoTotle = this.newTitleTodos;
                this.editTodosTitleModal = false
            }
        },
    }
</script>