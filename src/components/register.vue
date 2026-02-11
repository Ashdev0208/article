<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router';

const author = useAuthStore();
const router = useRouter();

const form = reactive({
  name: "",
  email: '',
  password: ''
})


const submitInfo = async () => {
  
  await author.register({
    username: form.name,
    email: form.email,
    password: form.password
  });
   if (author.errors == null) {
     router.push({ name: 'home' });
  }
 
}
</script>


<template>
    <main class="form-signin w-25 m-auto text-center">
        <form>
            <RouterLink class="mb-4" :to="{ name: 'home' }" alt="" width="72" height="57"><img
                    src="@/assets/favicon.ico" alt=""></RouterLink>
            <h1 class="h3 mb-3 fw-normal">Please sing up</h1>
                
        <Input :type="'text'" :label="'Name please'" v-model="form.name" />
        <Input :type="'email'" :label="'email'" v-model="form.email" />
        <Input :type="'password'" :label="'passowrd please'" autocomplete="current-password" v-model="form.password"  />
  <Button @click.prevent type="submit" @click="submitInfo" >
    {{ author.isLoading ? 'Loading...' : 'Register' }}
  </Button>
        </form>
        <pre> {{ author.errors }} </pre>
    </main>
</template>

<style></style>
