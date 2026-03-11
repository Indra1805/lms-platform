import { create } from "zustand";
import { api } from "@/lib/api";

interface User {
  id: number;
  email: string;
  full_name: string;
  role?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;

  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  isAuthenticated: false,

  fetchUser: async () => {
    try {
      const res = await api.get("/users/me/", { withCredentials: true });

      set({
        user: res.data,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error: any) {
      // Ignore expected 401 errors
      if (error.response?.status !== 401) {
        console.error(error);
      }

      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout/", {}, { withCredentials: true });
    } catch {}

    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));
