import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthStore } from "./interfaces/AuthStore";
import { zustandStorage } from "./mmkv";

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      loggedUser: null,
      setLoggedUser(user) {
        set({ loggedUser: user });
      },
      unsetUser() {
        set({ loggedUser: null });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAuthStore;
