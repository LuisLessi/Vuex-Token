<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <div>
        <h3>Signup</h3>
        <hr />
      </div>
      <form @submit.prevent="onSignup()">
        <div class="form-group mb-3">
          <label>Email</label>
          <input v-model.trim="email" type="text" class="form-control" />
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model.trim="password" type="password" class="form-control" />
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </div>

        <div class="mt-3">
          <button type="submit" class="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SignupValidations from "@/services/SignupValidations";
import {mapActions} from 'vuex'
import {SIGNUP_ACTION} from '../store/storeconstants'

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {

    ...mapActions('auth', {
      signup: SIGNUP_ACTION
    }),

    onSignup() {
      let validations = new SignupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      if ('email' in this.errors || 'password' in this.errors) {
        return false;
      }

      //signup registration
      this.signup({email: this.email, password: this.password})
    },
  },
};
</script>

<style>
</style>