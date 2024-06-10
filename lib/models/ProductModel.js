import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: {
      rate: { type: Number, required: true },
      countInStock: { type: Number, required: true },
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default ProductModel;

export const Product = {
  _id: '',
  name: '',
  image: '',
  banner: '',
  price: 0,
  brand: '',
  description: '',
  category: '',
  rating: 0,
  numReviews: 0,
  countInStock: 0,
  colors: [],
  sizes: [],
};
