export interface Rating {
    rate: number;
    count: number;
  }
  export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating: Rating;
    stock: number;
    brand?: string;
    category: string;
    images: string[];
  }
  