<template>
  <form id="contact-form">
    <div class="row">
      <div class="col">
        <TextField id="first-name"
                   label="First Name"
                   :value="formData.firstName"
                   @input="v => this.formData.firstName = v" />
      </div>
      <div class="col">
        <TextField id="last-name"
                   label="Last Name"
                   v-model="formData.lastName" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <CountryDD v-model="formData.country" />
      </div>
      <div class="col">
        <StateDD :country="formData.country"
                 v-model="formData.province" />
      </div>
    </div>
    <TextField id="street-address"
               label="Street Address"
               v-model="formData.street" />
    <TextField id="city"
               label="City"
               v-model="formData.city" />
    <TextField id="postalCode"
               label="Postal Code"
               v-model="formData.postalCode" />
    <div class="row">
      <div class="col text-right">
        <button class="btn btn-lg btn-primary">Save</button>&nbsp;
        <button class="btn btn-lg btn-info">Reset</button>
      </div>
    </div>
  </form>
</template>

<script>
import CountryDD from '../components/CountryDD';
import StateDD from '../components/StateDD';
import TextField from '../components/TextField';

export default {
  components: {
    CountryDD,
    StateDD,
    TextField,
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        country: '',
        province: '',
        street: '',
        city: '',
        postalCode: '',
      },
    };
  },
};
</script>

<style>
</style>