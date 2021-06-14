<template>
  <div>
    <div class="row ">
      <div class="col-md-6">
        <ChartBar></ChartBar>
      </div>
      <div class="col-md-6">
        <ChartDetail></ChartDetail>
      </div>
      <div class="col-md-12">
        <danh-sach-ho-so></danh-sach-ho-so>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import ChartBar from '@/modules/thu-tuc-noi-bo/components/pages/ChartBar'

// eslint-disable-next-line import/extensions
import ChartDetail from '@/modules/thu-tuc-noi-bo/components/pages/ChartDetail'

// eslint-disable-next-line import/extensions
import DanhSachHoSo from '@/modules/thu-tuc-noi-bo/components/pages/DanhSachHoSo'

export default {
  name: 'Common',
  components: {
    ChartBar,
    ChartDetail,
    DanhSachHoSo,
  },
}
</script>

<style scoped>
</style>
