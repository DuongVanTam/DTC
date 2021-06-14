import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/thu-tuc-noi-bo/constants/constants'

export default [
  {
    title: MENU_ROUTE_NAME.THU_TUC_NOI_BO.NAME,
    icon: 'LayersIcon',
    children: [
      {
        title: MENU_ROUTE_NAME.THU_TUC_NOI_BO.TONG_QUAN,
        route: ROUTE_NAME.THU_TUC_NOI_BO.TONG_QUAN,
      },
      {
        title: MENU_ROUTE_NAME.THU_TUC_NOI_BO.HO_SO_NOI_BO,
        route: ROUTE_NAME.THU_TUC_NOI_BO.HO_SO_NOI_BO,
      },
      {
        title: MENU_ROUTE_NAME.THU_TUC_NOI_BO.QUAN_LY_LUU_KHO,
        route: ROUTE_NAME.THU_TUC_NOI_BO.QUAN_LY_LUU_KHO,
      },
      {
        title: MENU_ROUTE_NAME.THU_TUC_NOI_BO.BAO_CAO_THONG_KE,
        route: ROUTE_NAME.THU_TUC_NOI_BO.BAO_CAO_THONG_KE,
      },
    ],
  },
]
