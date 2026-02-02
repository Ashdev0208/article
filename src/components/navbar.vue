<script>
import { RouterLink } from 'vue-router'
export default {}
</script>

<template>
    <div>
        <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
            <RouterLink :to="{ name: 'home' }" class="d-flex align-items-center  text-dark text-decoration-none">
                <img src="../assets/favicon.ico" alt="logo" class="w-25">
                <span class="fs-4 d-block">the article</span>
            </RouterLink>
            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'register' }">register
                </RouterLink>
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'login' }">login</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style lang="css" scoped></style>
