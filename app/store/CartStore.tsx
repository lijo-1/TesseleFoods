import { create } from "zustand";

type Product = {
  id: number; 
  name: string;
  price: number;
  quantity: string;
  cartquantity: number;
};

type CartState = {
  cart: Product[];
  addToCart: (product: Omit<Product, "cartquantity">) => void;
  increaseQuantity: (id: number) => void; 
  decreaseQuantity: (id: number) => void; 
  removeProduct: (id: number) => void;    
};

const useCartStore = create<CartState>((set) => ({
  cart: [],
  
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, cartquantity: item.cartquantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, cartquantity: 1 }] };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, cartquantity: item.cartquantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, cartquantity: item.cartquantity - 1 }
            : item
        )
        .filter((item) => item.cartquantity > 0),
    })),

  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export default useCartStore;
