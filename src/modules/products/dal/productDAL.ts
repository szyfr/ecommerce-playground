import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { ProductDTO } from "../dto/productDTO";

export const ProductDAL = {
    getAll: async (): Promise<ProductDTO[]> => {
        return products as ProductDTO[];
    },
    getBySlug: async (slug: string): Promise<ProductDTO> => {
        const product = products.find((p) => p.slug === slug);
        if (!product) {
            notFound();
        }
        return product as ProductDTO;
    },
};
