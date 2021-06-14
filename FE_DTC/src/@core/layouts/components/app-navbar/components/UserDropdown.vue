<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          bkhdt.admin
        </p>
        <span class="user-status" />
      </div>
      <!--      <b-avatar-->
      <!--        size="40"-->
      <!--        :src="userData.avatar"-->
      <!--        variant="light-primary"-->
      <!--        badge-->
      <!--        class="badge-minimal"-->
      <!--        badge-variant="success"-->
      <!--      >-->
      <!--        <feather-icon-->
      <!--          v-if="!userData.fullName"-->
      <!--          icon="UserIcon"-->
      <!--          size="22"-->
      <!--        />-->
      <!--      </b-avatar>-->
    </template>

    <b-dropdown-item
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="UserIcon"
        class="mr-50"
      />
      <span>Profile</span>
    </b-dropdown-item>
    <b-dropdown-divider/>
  </b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BDropdownItem, BDropdownDivider,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isLogin')
      this.$store.dispatch('common/setIsLogin', false)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
