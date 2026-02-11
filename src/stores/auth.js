import { defineStore } from 'pinia'
import authService from '@/services/auth' // ✅ THIS WAS MISSING
import { setItem,getItem } from '@/helpers/persistance-storage'

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
        this.errors = null;
        setItem('token', this.user.token)
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
