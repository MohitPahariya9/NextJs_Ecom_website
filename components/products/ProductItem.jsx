import { Product } from '@/lib/models/ProductModel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Script from 'next/script';

export default function ProductItem({ product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        {/* <Rating value={product.rating} caption={`(${product.numReviews})`} /> */}
        <p className="mb-2">{product.title}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">₹{product.price}</span>
          <script src="https://cdn.lordicon.com/lordicon.js" async />
          <lord-icon
            src="https://cdn.lordicon.com/evyuuwna.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{
              width: '45px',
              height: '45px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
