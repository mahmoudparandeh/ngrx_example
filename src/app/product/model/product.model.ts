export interface IProduct {
  id: number;
  title: string;
  description: string;
  fee: number;
  bookmark: boolean;
  defaultWeight: number;
  discount: null | number;
  images: string[];
  silverPrice: ISilverPrice[];
  status: string;
}

export interface ISilverPrice {
  key: string;
  price: number;
}
