import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthStore } from "./interfaces/AuthStore";
import { zustandStorage } from "./mmkv";

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: "",
      user_id: "",
      setUserId: (user_id: string) => set({ user_id }),
      setToken: (token: string) => set({ token }),
      removeToken: () => set({ token: "" }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAuthStore;
