<template>
  <DataGrid
    key-field="id"
    :columns="columns"
    :records="results"
    @select-record="handleSelectRecord"
  />
</template>

<script>
import { dao } from '@speedingplanet/rest-server';
import DataGrid from '@/components/DataGrid.vue';

export default {
  components: {
    DataGrid,
  },
  data() {
    return {
      results: [],
      columns: [
        { field: 'displayName', label: 'Name' },
        { field: 'address.city', label: 'City' },
        { field: 'address.state', label: 'State' },
        { field: 'email', label: 'E-mail' },
      ],
    };
  },
  methods: {
    handleSelectRecord(record) {
      // this.$router.push(`/users/detail/${record.id}`);
      this.$router.push('/users/detail/' + record.id);
    },
  },
  created() {
    dao.findAllUsers().then(results => {
      this.results = results.data;
    });
  },
};
</script>

<style>
</style>