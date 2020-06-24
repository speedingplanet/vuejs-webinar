<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select :id="id"
            type="text"
            class="form-control"
            v-model="fieldValue"
            v-bind="$attrs">
      <option value>{{ defaultMsg }}</option>
      <option v-for="opt in options"
              :value="opt.value"
              :key="opt.value">{{ opt.label }}</option>
    </select>
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
    options: Array,
    id: String,
    defaultMsg: String,
  },
  methods: {
    handleSelect(event) {
      this.$emit('selectOption', event.target.value);
    },
  },
};
</script>

<style></style>
