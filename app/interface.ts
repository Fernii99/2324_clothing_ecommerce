export interface userData {
  _id: string;
  picture: string;
  name: number;
  description: string;
}

export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  name: number;
  price: string;
  categoryName: string;
  slug: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}