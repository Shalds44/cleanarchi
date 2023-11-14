<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const layoutName = ref(null)
</script>
<template>
  <div class="layout">
    <div class="layout-header">
      <RouterView class="header" name="Header"></RouterView>
      <RouterView class="header-filter" name="HeaderFilter"></RouterView>
    </div>
    <RouterView class="leftsidebar" name="LeftSideBar"></RouterView>
    <RouterView class="main"></RouterView>
    <RouterView class="rightsidebar" name="RightSideBar"></RouterView>
  </div>
</template>
<style scoped lang="scss">
body {
  width: 100%;
}

.layout {
  display: flex;
}

.layout-header {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
.header {
  border-block-end-width: thin;
}
.header-filter {
  padding: 7px 40px;
  display: flex;
  justify-content: space-around;
  border-block-end-width: thin;
  border-top: 1px #efefef solid;
  border-bottom: 1px #efefef solid;
  background-color: white;
}
.leftsidebar {
  padding-block-start: $padding-block-start;
}

.main {
  padding-block-start: $padding-block-start;
  width: 76%;
  margin: auto;
}
</style>
