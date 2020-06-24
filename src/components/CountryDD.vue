<template>
  <DropDown id="countries"
            label="Country"
            defaultMsg="Please select a country"
            :options="options"
            v-model="country"></DropDown>

</template>

<script>
import DropDown from './DropDown.vue';
import { countries } from '../static-data';

export default {
  components: {
    DropDown,
  },
  computed: {
    options() {
      return countries.map((country) => ({
        value: country.abbreviation,
        label: country.name,
      }));
    },
    country: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
  },
};
</script>

<style>
</style>