<template>
  <div style="padding:5px">
  <div slot="table-actions" style="padding:5px">
  <el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-plus"></el-button>
  <el-button type="danger" icon="el-icon-delete"></el-button>
</el-button-group>

  </div>

  <vue-good-table
      :columns="columns"
      :search-options="searchOption"
      :rows="rows"
      :pagination-options="paginationOptions"
      :select-options="{ enabled: true }"
      />
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

export default {
  name: 'my-component',
  data() {
    return {
      paginationOptions: {
        enabled: true,
        perPage: 5,
        position: 'bottom',
        perPageDropdown: [5, 10, 20, 100, 200, 500, 1000],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: 'next',
        prevLabel: 'prev',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        pageLabel: 'page', // for 'pages' mode
        allLabel: 'All'
      },
      searchOption: {
        enabled: true,
        placeholder: 'Search this table'
      },
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        { id: 1, name: 'John', age: 20, createdAt: '201-10-31:9: 35 am', score: 0.03443 },
        { id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.13343 },
        { id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 }
      ]
    }
  },
  components: {
    VueGoodTable
  }
}
</script>
