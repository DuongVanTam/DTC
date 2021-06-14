<template>
  <!-- basic search -->
  <div class="contain">
    <b-button variant="info" class="btn-icon btn">
      <feather-icon icon="ListIcon" />
    </b-button>
    <b-button variant="primary" style="width: 180px">Thêm mới</b-button>
    <b-button variant="relief-danger" class="btn">Export</b-button>
    <b-button variant="relief-warning" class="btn">Import</b-button>
    <b-input-group class="input-group-merge">
      <b-input-group-prepend is-text>
        <feather-icon icon="SearchIcon" class="btn"/>
      </b-input-group-prepend>
      <b-form-input placeholder="Search" />
    </b-input-group>
  </div>
</template>

<script>
import {
  BInputGroup, BFormInput, BInputGroupPrepend, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BInputGroup,
    BFormInput,
    BInputGroupPrepend,
  },
}
</script>
<style>
  .contain{
    display: flex;
    flex-direction: row-reverse;
  }
  .btn{
    width: 110px;
    margin:0 0 40px 20px;
  }
</style>
