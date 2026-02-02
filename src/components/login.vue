<script>
export default {
    data() {
        return {
            formDataBase: {  FirstOne: ["email", "formEmail", "Email"], SecondOne: ["password", "formPassword", "Password"] }
        }
    }
}
</script>

<template>
    <main class="form-signin w-25 m-auto text-center">
        <form>
            <RouterLink class="mb-4" :to="{ name: 'home' }" alt="" width="72" height="57"><img src="@/assets/favicon.ico"
                    alt=""></RouterLink>
            <h1 class="h3 mb-3 fw-normal">Please sing in</h1>
            <Input v-for="(item, key) in formDataBase" :key="key" :type="item[0]" :id="item[1]" :label="item[2]" />
            <Button type="sumbit">Sign in</Button>
        </form>
    </main>
</template>

<style></style>
