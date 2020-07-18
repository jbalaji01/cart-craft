import { ICartItem } from 'app/shared/model/cart-item.model';

export interface IProduct {
  id?: number;
  productName?: string;
  description?: string;
  price?: number;
  image?: string;
  cartItem?: ICartItem;
}

export const defaultValue: Readonly<IProduct> = {};
