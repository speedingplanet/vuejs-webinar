<template>
  <DropDown id="states"
            label="State/Province"
            defaultMsg="Please select a state"
            v-model="province"
            :options="options"></DropDown>
</template>

<script>
import DropDown from './DropDown.vue';
import { provinces } from '../static-data';

export default {
  components: {
    DropDown,
  },
  props: {
    country: String,
  },
  computed: {
    options() {
      return this.country
        ? provinces[this.country].map((province) => ({
            value: province.abbreviation,
            label: province.name,
          }))
        : [];
    },
    province: {
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

<style></style>
