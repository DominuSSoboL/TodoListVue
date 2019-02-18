<template>
  <v-app>

    <!-- SIDEBAR -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app>
      <v-list>
        <v-list-tile 
          v-for="link of linksDrawer"
          :key="link.title"
          :to="link.url">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

      <v-list class="hidden-md-and-up">
        <v-list>
          <v-list-tile 
            v-for="link of links"
            :key="link.title"
            :to="link.url">
            <v-list-tile-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <!-- HEADER -->
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/" tag="span" class="cursor">Simple Todo List</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- MAIN -->
    <v-content>
        <router-view></router-view>
    </v-content>

    <!-- ADD TODOS BUTTON -->
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>

    <!-- MODAL ADD TODOS -->
    <v-dialog v-model="dialog" width="800px">
      <v-card>

        <v-card-title
          class="grey lighten-4 py-4 title">
          Create Todo List
        </v-card-title>

        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>

            <v-flex xs12>
                <v-form ref="form" v-model="valid" validation>
                  <v-text-field
                    class="mb-4"
                    name="title"
                    label="Ad title for todo list"
                    type="text"
                    v-model="createToDoTitle"
                    required
                    :rules="[v => !!v || 'Title is required!']"
                  ></v-text-field>
                </v-form>
            </v-flex>

          </v-layout>
        </v-container>

        <v-card-actions>
          <v-btn flat class="primary" @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn 
            flat 
            class="success"
            :disabled="!valid"
            @click="createNewTodos">Create add</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
    
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      idTodosCreate: 100,
      createToDoTitle: '',
      dialog: false,
      drawer: null,
      valid: false,
      items: [
        { title: 'All todos', icon: 'list', url: '/list' }
      ],
      links: [
        { title: 'Login', icon: 'lock', url: '/login'},
        { title: 'Registration', icon: 'face', url: '/singin'}
      ],
      linksDrawer: [
        { title: 'Home', icon: 'home', url: '/'},
        { title: 'My todos', icon: 'view_list', url: '/list'}
      ]
    }),
    props: {
      source: String
    },
    methods: {
      openDilog () {
        return this.dialog = !this.dialog
      },
      createNewTodos () {
        this.$store.state.todos.push({
            todoTotle: this.createToDoTitle,
            colorScheme: '',
            id: this.$store.state.todos.length,
            tasks: []
        });
        this.createToDoTitle = ''
        this.dialog = false;
      }
    },
  }
</script>


<style scoped>
  .cursor {
    cursor: pointer;
  }
</style>