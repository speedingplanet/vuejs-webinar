<template>
  <section>
    <div class="row">
      <div class="col">
        <ul class="list-inline">
          <li class="list-inline-item">
            <router-link to="/users/grid">Browse</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
