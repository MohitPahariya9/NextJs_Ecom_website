// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     items: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: 'Product',
//           required: true,
//         },
//         name: { type: String, required: true },
//         slug: { type: String, required: true },
//         qty: { type: Number, required: true },
//         image: { type: String, required: true },
//         price: { type: Number, required: true },
//       },
//     ],
//     shippingAddress: {
//       fullName: { type: String, required: true },
//       address: { type: String, required: true },
//       city: { type: String, required: true },
//       postalCode: { type: String, required: true },
//       country: { type: String, required: true },
//     },
//     paymentMethod: { type: String, required: true },
//     paymentResult: { id: String, status: String, email_address: String },
//     itemsPrice: { type: Number, required: true },
//     shippingPrice: { type: Number, required: true },
//     taxPrice: { type: Number, required: true },
//     totalPrice: { type: Number, required: true },
//     isPaid: { type: Boolean, required: true, default: false },
//     isDelivered: { type: Boolean, required: true, default: false },
//     paidAt: { type: Date },
//     deliveredAt: { type: Date },
//   },
//   {
//     timestamps: true,
//   }
// );
// const OrderModel =
//   mongoose.models.Order || mongoose.model('Order', orderSchema);

// export default OrderModel;

export const Order = {
  _id: '',
  user: { name: '' },
  items: [],
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  },
  paymentMethod: '',
  paymentResult: { id: '', status: '', email_address: '' },
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  isPaid: false,
  isDelivered: false,
  paidAt: '',
  deliveredAt: '',
  createdAt: '',
};

export const OrderItem = {
  name: '',
  slug: '',
  qty: 0,
  image: '',
  price: 0,
  color: '',
  size: '',
};

export const ShippingAddress = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
};
