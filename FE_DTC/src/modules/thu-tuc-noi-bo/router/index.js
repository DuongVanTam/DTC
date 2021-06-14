// eslint-disable-next-line import/named
import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/thu-tuc-noi-bo/constants/constants'

// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: ROUTE_NAME.THU_TUC_NOI_BO.NAME + ROUTE_NAME.THU_TUC_NOI_BO.TONG_QUAN,
    name: ROUTE_NAME.THU_TUC_NOI_BO.TONG_QUAN,
    component: () => import('@/modules/thu-tuc-noi-bo/views/TongQuan.vue'),
    meta: {
      pageTitle: MENU_ROUTE_NAME.THU_TUC_NOI_BO.TONG_QUAN,
      breadcrumb: [
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.NAME,
        },
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.TONG_QUAN,
          active: true,
        },
      ],
    },
  },
  {
    path: ROUTE_NAME.THU_TUC_NOI_BO.NAME + ROUTE_NAME.THU_TUC_NOI_BO.HO_SO_NOI_BO,
    name: ROUTE_NAME.THU_TUC_NOI_BO.HO_SO_NOI_BO,
    component: () => import('@/modules/thu-tuc-noi-bo/views/HoSoNoiBo.vue'),
    meta: {
      pageTitle: MENU_ROUTE_NAME.THU_TUC_NOI_BO.HO_SO_NOI_BO,
      breadcrumb: [
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.NAME,
        },
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.HO_SO_NOI_BO,
          active: true,
        },
      ],
    },
  },
  {
    path: ROUTE_NAME.THU_TUC_NOI_BO.NAME + ROUTE_NAME.THU_TUC_NOI_BO.QUAN_LY_LUU_KHO,
    name: ROUTE_NAME.THU_TUC_NOI_BO.QUAN_LY_LUU_KHO,
    component: () => import('@/modules/thu-tuc-noi-bo/views/TongQuan.vue'),
    meta: {
      pageTitle: MENU_ROUTE_NAME.THU_TUC_NOI_BO.QUAN_LY_LUU_KHO,
      breadcrumb: [
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.NAME,
        },
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.QUAN_LY_LUU_KHO,
          active: true,
        },
      ],
    },
  },
  {
    path: ROUTE_NAME.THU_TUC_NOI_BO.NAME + ROUTE_NAME.THU_TUC_NOI_BO.BAO_CAO_THONG_KE,
    name: ROUTE_NAME.THU_TUC_NOI_BO.BAO_CAO_THONG_KE,
    component: () => import('@/modules/thu-tuc-noi-bo/views/TongQuan.vue'),
    meta: {
      pageTitle: MENU_ROUTE_NAME.THU_TUC_NOI_BO.BAO_CAO_THONG_KE,
      breadcrumb: [
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.NAME,
        },
        {
          text: MENU_ROUTE_NAME.THU_TUC_NOI_BO.BAO_CAO_THONG_KE,
          active: true,
        },
      ],
    },
  },
  {
    path: ROUTE_NAME.THU_TUC_NOI_BO.NAME + ROUTE_NAME.THU_TUC_NOI_BO.TAO,
    name: ROUTE_NAME.THU_TUC_NOI_BO.TAO,
    component: () => import('@/modules/thu-tuc-noi-bo/views/TongQuan.vue'),
  },
]
