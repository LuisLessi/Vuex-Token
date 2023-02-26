<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <div>
        <h3>Login</h3>
        <hr />
      </div>
      <form @submit.prevent="onLogin()">
        <div class="form-group mb-3">
          <label>Email</label>
          <input v-model="email" type="text" class="form-control" />
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" />
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </div>

        <div class="mt-3">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SignupValidations from "@/services/SignupValidations";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    onLogin() {
      let validations = new SignupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }

      //signup registration
    },
  },
};
</script>

<style>
</style>