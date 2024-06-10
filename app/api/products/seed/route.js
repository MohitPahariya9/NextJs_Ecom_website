import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async ( NextRequest) => {
  const { products } = data
  await dbConnect()

  await ProductModel.deleteMany()
  await ProductModel.insertMany(products)

  return NextResponse.json({
    message: 'seeded successfully',
    products,
  })
}
