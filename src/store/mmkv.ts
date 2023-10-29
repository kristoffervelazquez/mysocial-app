import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

export const storage = new MMKV({
  id: "auth-store",
});

export const zustandStorage: StateStorage = {
  setItem: async (name: string, value: string) => {
    return storage.set(name, value);
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: async (name: string) => {
    return storage.delete(name);
  },
};
