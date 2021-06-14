<template>
  <b-card-code >

    <!-- input search -->
    <ActionsTop v-if="top"></ActionsTop>
    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >

        <!-- Column: Name -->
        <div
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </div>

        <!-- Column: Status -->

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span>
            <feather-icon
                icon="Edit2Icon"
                class="mr-1"
            />
            <feather-icon
                icon="Trash2Icon"
                class="mr-1"
            />
            <feather-icon
                icon="RepeatIcon"
                class="mr-1"
            /><feather-icon
              icon="UploadCloudIcon"
              class="mr-1"
          />
          </span>
        </span>

        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['3','5','10']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap "> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value)=>props.pageChanged({currentPage:value})"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BPagination, BFormSelect,
} from 'bootstrap-vue'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import ActionsTop from '@/modules/thu-tuc-noi-bo/components/pages/ActionsTop.vue'

export default {
  components: {
    BCardCode,
    VueGoodTable,
    BPagination,
    BFormSelect,
    ActionsTop,
  },
  props: {
    columns: Array,
    rows: Array,
    top: Array,
  },
  data() {
    return {
      pageLength: 3,
      dir: false,
      searchTerm: '',
    }
  },
  mounted() {
    console.log()
  },
}
</script>
