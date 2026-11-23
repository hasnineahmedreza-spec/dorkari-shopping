import type { Product } from "./sample-data";

export type { Product };

export interface CartItem {
  product: Product;
  quantity: number;
}
