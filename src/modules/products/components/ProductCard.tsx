import React from "react";
import Link from "next/link";
import { ProductDTO } from "../dto/productDTO";

interface ProductCardProps {
    product: ProductDTO;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link
            href={`/products/${product.slug}`}
            className="block border p-4 rounded shadow hover:shadow-lg transition"
        >
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-blue-600 font-semibold mt-1">${product.price}</p>
        </Link>
    );
};
