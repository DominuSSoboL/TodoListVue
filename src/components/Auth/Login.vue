<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>

              <v-card-text>

                <v-form
                    ref="form"
                    v-model="valid"
                    validation>

                  <v-text-field 
                    prepend-icon="person"
                    name="email"
                    label="Email"
                    type="email"
                    :rules="emailRules"
                    v-model="email"                    
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="lock"
                    v-model="password"
                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                    :rules="[passwordRules.required, passwordRules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>

                </v-form>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="primary"
                    @click="onSubmit"
                    :disabled="!valid">
                Login</v-btn>
              </v-card-actions>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            showPassword: false,
            valid: false,
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: {
              required: v => !!v || 'Password is required',
              min: v => v.length >= 8 || 'Min 8 characters'
            }
        }
    },
    methods: {
        onSubmit () {
          if(this.$refs.form.validate()){
            const user = {
              email: this.email,
              password: this.password
            }
          }
        }
    }
}
</script>