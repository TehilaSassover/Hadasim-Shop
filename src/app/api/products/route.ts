// app/api/products/route.js

import { NextResponse } from 'next/server';
import { fetchProducts, addProduct } from '@/app/services/server/products';

// GET /api/products
export async function GET() {
    try {
        const products = await fetchProducts();
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 });
    }
}
// POST /api/products
export async function POST(request) {
    try {
        const newProduct = await request.json();  // Read JSON from body
        const savedProduct = await addProduct(newProduct);
        return NextResponse.json(savedProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to add product' }, { status: 500 });
    }
}
