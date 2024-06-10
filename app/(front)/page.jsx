/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ProductItem from '@/components/products/ProductItem';
import data from '@/lib/data';
import productService from '@/lib/services/productService';
import Link from 'next/link';
import { convertDocToObj } from '@/lib/utils';

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Tann Trim',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
};
export default async function Home() {
  // // Log the data to debug
  // console.log(data);

  // // Check if data and data.product are defined
  // if (!data || !data.product) {
  //   return <div>Loading...</div>;
  // }
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();
  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full" alt={product.name} />
            </Link>

            <div
              className="absolute flex justify-between transform 
               -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <h2 className="text-2xl py-2">Latest Products</h2> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))} */}
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  );
}
