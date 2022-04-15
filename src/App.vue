<template>
<!--  <router-link to="/home">Home</router-link>-->
<!--  <router-link to="/about">About</router-link>-->
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App'
  })
</script>
