<template>
  <b-card
    no-body
  >
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          Thống kê số lượng hồ sơ theo tình trạng
        </b-card-title>
      </div>
      <!--/ title and subtitle -->

      <!-- datepicker -->
      <!-- datepicker -->
    </b-card-header>

    <b-card-body>
      <VueApexCharts
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
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
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            // eslint-disable-next-line no-unused-vars
            click(chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        // eslint-disable-next-line no-undef
        colors: Apex.colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
          ],
          labels: {
            style: {
              // eslint-disable-next-line no-undef
              colors: Apex.colors,
              fontSize: '12px',
            },
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.apexcharts-menu-icon{
  display: none !important;
}
</style>
