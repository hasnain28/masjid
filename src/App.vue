<template>
  <div class="container">
    <NavbarDefault/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarDefault from '@/components/NavbarDefault.vue'

export default {
  name: "App",
  components: {
    NavbarDefault
  }
}
</script>
