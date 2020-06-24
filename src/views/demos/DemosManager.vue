<template>
  <section>
    <div class="row">
      <div class="col">
        <h1>Demos of Vue code</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul>
          <li>
            <router-link to="/demos/contact-form">Contact Form</router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>

  </section>
</template>

<script>
export default {};
</script>

<style></style>
