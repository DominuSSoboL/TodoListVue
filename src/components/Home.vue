<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <v-flex 
                xs12
                sm6
                md4
                v-for="todo of ads"
                :key="todo.id">
                <v-card>
                    <v-card-title class="blue white--text">
                        <v-btn 
                            icon 
                            dark
                            title="Add task for todo list"
                            @click="addTaskForTodoOpenModal(todo.id)">
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
                            <v-list-tile-action @click="addMarkTask(todo.id, task.id)">
                                <v-checkbox></v-checkbox>
                            </v-list-tile-action>

                            <v-list-tile-content>
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
                                        <router-link 
                                            icon
                                            white
                                            class="v-btn v-btn--icon theme--light"
                                            tag="button"
                                            title="More info for task"
                                            :to="'/detail/' + task.id"
                                            >
                                            <v-icon class="mr-1 theme--light">info</v-icon>
                                        </router-link>
                                    </v-list-tile>

                                    <v-list-tile @click="">
                                        <v-btn
                                            icon 
                                            greay
                                            @click="editTaskTitle(task.id)">
                                            <v-icon class="ml-1">create</v-icon>
                                        </v-btn>
                                    </v-list-tile>

                                    <v-list-tile @click="">
                                         <v-btn
                                            icon
                                            white
                                            @click="deleteTaskTitleOpenModal(todo.id, task.id)">
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

        <!-- MODAL ADD TASK FOR TODOS -->
        <v-dialog
            v-model="addTaskForTodoModal"
            width="500">
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title>
                    Add new task
                </v-card-title>

                 <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>

                        <v-flex xs12>
                            <v-form ref="form" validation>
                            <v-text-field
                                class="mb-4"
                                name="title"
                                label="Enter your task"
                                type="text"
                                v-model="addTaskText"
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
                            @click="addTaskForTodo">
                            ADD TASK
                        </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>

        <!-- MODAL EDIT TASK FOR TODOS -->
        <v-dialog
            v-model="editTaskTodos"
            width="500">
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title>
                    Edit title for task
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
                                v-model="newTitleTask"
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
                            @click="editTaskTitleOpenModal">
                            Edit TASK
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
               deleteTodosModal: false,    // If true modal delete todo open
               editTodosTitleModal: false, // If true modal edit title todo open
               addTaskForTodoModal: false, // If true modal add task for todo open
               editTaskTodos: false,
               addTaskText: '',
               newTitleTodos: '',
               newTitleTask: '',      
               activeListId: 0
            }
        },
        methods: {
            deleteTodosOpenModal(id) {
                this.deleteTodosModal = true;
                this.activeListId = id
            },
            deleteTodo () {
                const idx = this.$store.getters.ads.findIndex((el) => el.id === this.activeListId )
                this.deleteTodosModal = false
                this.$store.getters.ads.splice(idx, 1);
            },
            editTodosTitleOpenModal (id) {
                this.editTodosTitleModal = true;
                this.activeListId = id
            },
            editTodosTitle () {
                this.$store.getters.ads[this.activeListId].todoTotle = this.newTitleTodos;
                this.editTodosTitleModal = false
            },
            addTaskForTodoOpenModal (id) {
                this.addTaskForTodoModal = true;
                this.activeListId = id
            },
            addTaskForTodo () {
                const idx = this.$store.getters.ads.findIndex((el) => el.id === this.activeListId )
                const taskId = this.$store.getters.ads[idx].tasks.length;
                
                this.$store.getters.ads[idx].tasks.push({
                    mark: false,
                    taskTitle: this.addTaskText,
                    deadline: this.date,
                    id: this.activeListId.toString() + (taskId + 1)
                });
                this.addTaskText = ''
                this.addTaskForTodoModal = false;
            },
            editTaskTitle (id) {
                this.editTaskTodos = true;
                this.activeListId = id;
            },
            editTaskTitleOpenModal () {
                for(let i = 0; i < this.$store.getters.ads.length; i++){
                    for(let m = 0; m < this.$store.getters.ads[i].tasks.length; m++){
                        if(this.$store.getters.ads[i].tasks[m].id == this.activeListId){
                            this.$store.getters.ads[i].tasks[m].taskTitle = this.newTitleTask;
                        }
                    }
                }

                this.addTaskText = ''
                this.editTaskTodos = false;
            },
            deleteTaskTitleOpenModal (todoId, taskId) {
                let idx = this.$store.getters.ads[todoId].tasks.findIndex(el => el.id === taskId);
                const befoRemove = this.$store.getters.ads[todoId].tasks.slice(0, idx);
                
                if(this.$store.getters.ads[todoId].tasks[idx + 1]){
                    const afterRemove = this.$store.getters.ads[todoId].tasks.slice(idx + 1);
                    const newBeforeAfter = [...befoRemove, ...afterRemove];
                    this.$store.getters.ads[todoId].tasks = newBeforeAfter;
                } else {
                    this.$store.getters.ads[todoId].tasks = befoRemove;
                }
            },
            addMarkTask() {

            }
        },
        computed: {
            ads () {
                return this.$store.getters.ads
            }
        }
    }
</script>
<style>
    
</style>