<script setup>
import { ref,computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
const formDataBase = ref({ firstOne: ["text", "formName", "First Name"], SecondOne: ["email", "formEmail", "Email"], ThirdOne: ["password", "formPassword", "Password"]})
const author = useAuthStore();

function submitInfo() {
    author.setLoading(true);
}

</script>

<template>
    <main class="form-signin w-25 m-auto text-center">
        <form>
            <RouterLink class="mb-4" :to="{ name: 'home' }" alt="" width="72" height="57"><img src="@/assets/favicon.ico"
                    alt=""></RouterLink>
            <h1 class="h3 mb-3 fw-normal">Please sing up</h1>
            <Input v-for="(item, key) in formDataBase" :key="key" :type="item[0]" :id="item[1]" :label="item[2]" />
            <Button @click.prevent type="sumbit" @click="submitInfo" :disabled="author.isLoading" >{{ author.isLoading }}</Button>
        </form>
    </main>
</template>

<style></style>
