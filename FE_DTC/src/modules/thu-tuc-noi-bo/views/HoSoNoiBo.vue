<template>
  <div>
    <danh-sach-ho-so
      :columns="columns"
      :rows="rows"
      :top="top"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import DanhSachHoSo from '@/modules/thu-tuc-noi-bo/components/pages/DanhSachHoSo'

export default {
  name: 'HoSoNoiBo',
  components: {
    DanhSachHoSo,
  },
  data() {
    return {
      columns: [
        {
          label: 'STT',
          field: 'stt',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'TÊN HỒ SƠ',
          field: 'fullName',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'NGÀY NHẬN HS',
          field: 'start',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'HẠN TRẢ KQ',
          field: 'end',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'TÌNH TRẠNG HỒ SƠ',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'GHI CHÚ TÌNH TRẠNG',
          field: 'note',
        },
        {
          label: 'KẾT QUẢ',
          field: 'result',
        },
        {
          label: 'CHUYÊN VIÊN XỬ LÝ',
          field: 'employee',
        },
        {
          label: 'THAO TÁC',
          field: 'action',
          width: '150px',
        },
      ],
      rows: [
        {
          stt: 1, fullName: 'John', start: '10/4/2021', end: '10/5/2021', status: 'Hồ sơ vừa tiếp nhận', note: '', result: '', employee: 'Nguyễn Tuấn Hải',
        },
        {
          stt: 2, fullName: 'John', start: '10/4/2021', end: '10/5/2021', status: 'Hồ sơ vừa tiếp nhận', note: '', result: '', employee: 'Nguyễn Tuấn Hải',
        },
        {
          stt: 3, fullName: 'John', start: '10/4/2021', end: '10/5/2021', status: 'Hồ sơ vừa tiếp nhận', note: '', result: '', employee: 'Nguyễn Tuấn Hải',
        },
        {
          stt: 4, fullName: 'John', start: '10/4/2021', end: '10/5/2021', status: 'Hồ sơ vừa tiếp nhận', note: '', result: '', employee: 'Nguyễn Tuấn Hải',
        },
        {
          stt: 5, fullName: 'John', start: '10/4/2021', end: '10/5/2021', status: 'Hồ sơ vừa tiếp nhận', note: '', result: '', employee: 'Nguyễn Tuấn Hải',
        },
        {
          stt: 6, fullName: 'John', start: '10/4/2021', end: '10/5/2021', status: 'Hồ sơ vừa tiếp nhận', note: '', result: '', employee: 'Nguyễn Tuấn Hải',
        },
      ],
      top: [
        'export', 'import', 'add',
      ],
    }
  },
}
</script>

<style scoped>
</style>
