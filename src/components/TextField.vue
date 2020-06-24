<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input type="text"
           class="form-control"
           v-model="fieldValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    fieldValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
  },
  props: {
    label: String,
    value: String,
  },
};
</script>

<style>
</style>