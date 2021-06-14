<template>
  <b-card no-body >
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          Thống kê số lượng hồ sơ theo loại
        </b-card-title>
      </div>
      <!--/ title and subtitle -->

      <!-- datepicker -->
      <!-- datepicker -->
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import {
  BCard, BCardHeader, BCardBody, BCardTitle,
} from 'bootstrap-vue'

export default {
  name: 'DanhSachHoSo',
  components: {
    BCard,
    VueApexCharts,
    BCardHeader,
    BCardBody,
    BCardTitle,
  },
  data() {
    return {

      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 200, 300],
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Chủ trương đầu tư', 'Điều chỉnh chủ trương đầu tư', 'DADT có cấu phần xây dựng', 'DADT không có cấu phần xây dựng', 'Diều chỉnh DADT không có cấu phần xây dựng',
            'Kế hoạch lựa chọn nhà thầu', 'Điều chỉnh Kế hoạch lựa chọn nhà thầu',
          ],
        },
      },

    }
  },
}
</script>

<style scoped>
.apexcharts-toolbar{
  display: none !important;
}
</style>
