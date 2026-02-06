import { defineStore } from 'pinia'
import authService from '@/services/auth' // ✅ THIS WAS MISSING

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoading: false,
    errors: null
  }),

  actions: {
    async register(userData) {
      this.isLoading = true

      try {
        const response = await authService.register(userData)
        this.user = response.data.user
        console.log(response);
        this.errors = null
        return response
      } catch (err) {
        this.errors = err.response.data.detail.errors.body;
        throw err
      } finally {
        this.isLoading = false
        
      }
    }
  }
})
