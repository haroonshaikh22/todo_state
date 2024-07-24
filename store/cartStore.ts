import { create } from "zustand";
import { Product } from "./interface";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStroage } from "./mmkv";

// define typeProps of Zustand
export interface cartState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  //   updateProduct: (product: Product) => void;
  clearCart: () => void;
  items: number;
}

//Create store global use
const useCartStore = create<cartState>()(
  //uses Persist to call function synchronous as middleware to store data in LocalDB
  persist(
    // /define  method with params 1. to set action ,2. stroageId
    (set, get) => ({
      products: [],
      addProduct: (product: Product) =>
        set((state) => {
          state.items++;
          const hasProduct = state.products.find((p) => p.id === product.id);
          if (hasProduct) {
            return {
              products: state.products.map((p) => {
                if (p.id === product.id) {
                  return { ...p, quantity: p.quantity + 1 };
                }
                return p;
              }),
            };
          } else {
            return {
              products: [...state.products, { ...product, quantity: 1 }],
            };
          }
        }),
      removeProduct: (product: Product) =>
        set((state) => {
          return {
            products: state.products
              .map((p) => {
                if (p.id === product.id) {
                  state.items--;
                  return { ...p, quantity: p.quantity - 1 };
                }
                return p;
              })
              .filter((p) => p.quantity > 0),
          };
        }),
      //   updateProduct: (product: Product) => void;
      clearCart: () =>
        set((state) => {
          return {
            items: 0,
            products: [],
          };
        }),
      items: 0,
    }),
    //second params update mention storage
    {
      name: "cart-storage",
      storage: createJSONStorage(() => zustandStroage),
    }
  )
);

export default useCartStore;
