<template>
  <main id="app" class="container">
    <header class="row">
      <div class="col">
        <h1>Welcome to ZipPay</h1>
      </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/demos">Demos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions">Transactions</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </main>
</template>

<style scoped>
nav.navbar {
  margin-bottom: 15px;
}
</style>

<script>
import './assets/bootstrap.css';
export default {};
</script>
