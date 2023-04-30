import {IProduct} from "../models/product";

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Sledgehammer',
    price: 125.75,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'tools',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 4.8,
      count: 178
    }
  },
  {
    id: 2,
    title: 'Axe',
    price: 190.50,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'tools',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 3.9,
      count: 15
    }
  }
]
