<script>
import { RouterView } from 'vue-router'
import { Navbar } from '@/components/'
export default {
  components: {
    Navbar,
 }
}
</script>

<template>
    <div class="container">
      <Navbar></Navbar>
    </div>
    <h1 class="d-flex justify-content-center">hello world</h1>
    <div>
      <RouterView></RouterView>
    </div>
</template>

<style scoped></style>
