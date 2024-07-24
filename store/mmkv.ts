import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware/persist";

//create stroage db with id
export const storage = new MMKV({
  id: "cart-storage",
});

// to update db as synchronously  define middleware action
export const zustandStroage: StateStorage = {
  //function to call and update storage
  setItem: (name: string, value: string) => {
    return storage.set(name, value);
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return storage.delete(name);
  },
};
