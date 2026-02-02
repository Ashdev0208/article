
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setLoading(value) {
      this.isLoading = value;
    },
  },
});