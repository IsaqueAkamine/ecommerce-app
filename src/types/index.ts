type TRating = {
  rate: number;
  count: number;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
};

export type TProductList = {
  items: TProduct[];
};
