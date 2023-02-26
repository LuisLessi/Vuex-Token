<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/" class="nav-link">
          <li class="nav-item">Home</li>
        </router-link>

        <router-link to="/login" class="nav-link">
          <li class="nav-item">Login</li>
        </router-link>

        <router-link to="/signup" class="nav-link">
          <li class="nav-item">Signup</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style>
.nav-link {
  text-decoration: none;
}
</style>
