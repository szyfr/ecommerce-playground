import { Metadata } from "next";
import { ProductDAL } from "@/modules/products/dal/productDAL";
import { ProductCard } from "@/modules/products/components/ProductCard";
import { ProductDTO } from "@/modules/products/dto/productDTO";

// Page Metadata (SEO)
export const metadata: Metadata = {
    title: "Shop All Products | My E-commerce Store",
    description:
        "Browse our wide selection of products, including electronics, fashion, and home appliances.",
    keywords: "ecommerce, products, electronics, fashion, shop online",
};

export default async function ProductsPage() {
    // Server-side fetch
    const products: ProductDTO[] = await ProductDAL.getAll();

    // Prepare JSON-LD structured data for products
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: products.map((product, index) => ({
            "@type": "Product",
            position: index + 1,
            name: product.name,
            description: product.description,
            image: product.imageUrl,
            sku: product.id,
            category: product.category,
            offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: product.price,
                availability:
                    product.stock > 0
                        ? "https://schema.org/InStock"
                        : "https://schema.org/OutOfStock",
                url: `http://localhost:3000/products/${product.slug}`,
            },
        })),
    };

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* JSON-LD for structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
