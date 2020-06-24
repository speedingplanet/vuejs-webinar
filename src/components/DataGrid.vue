<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th @click="handleHeaderClick(column.field)"
            v-for="column in columns"
            v-bind:key="column.field">
          {{ column.label }}
          <span>{{ getSortIndicator(column.field) }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in sortedRecords"
          :key="record[keyField]"
          @click="handleRowClick(record)">
        <td v-for="column in columns"
            v-bind:key="column.field">{{ get(record, column.field) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import * as lodash from 'lodash';

export default {
  props: {
    records: Array,
    columns: Array,
    keyField: String,
  },
  data() {
    return {
      sortField: '',
      sortDirection: 'asc',
    };
  },
  computed: {
    sortedRecords() {
      return lodash.orderBy(this.records, this.sortField, this.sortDirection);
    },
  },
  methods: {
    get(object, path) {
      return lodash.get(object, path);
    },
    getSortIndicator(field) {
      if (field === this.sortField) {
        return this.sortDirection === 'asc' ? '⏫' : '⏬';
      }
    },
    handleHeaderClick(nextSortField) {
      let sortDirection = 'asc';

      if (this.sortField === nextSortField && this.sortDirection === 'asc') {
        sortDirection = 'desc';
      }

      this.sortDirection = sortDirection;
      this.sortField = nextSortField;
    },
    handleRowClick(record) {
      this.$emit('select-record', record);
    },
  },
};
</script>

<style>
th {
  cursor: pointer;
}
</style>