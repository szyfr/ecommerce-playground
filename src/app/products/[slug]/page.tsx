import { cache } from "react";
import { Metadata } from "next";
import { ProductDAL } from "@/modules/products/dal/productDAL";
import { ProductDTO } from "@/modules/products/dto/productDTO";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

// Memoized fetch function to avoid duplicate requests
const getProduct = cache(async (slug: string): Promise<ProductDTO> => {
    return await ProductDAL.getBySlug(slug);
});

// Generate SEO metadata for each product
export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProduct(slug);

    return {
        title: `${product.name} | My E-commerce Store`,
        description: product.description,
        keywords: `${product.name}, ${product.category}, ecommerce, buy online`,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [product.imageUrl],
        },
    };
}

// Server Component for product page
export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    // JSON-LD structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        sku: product.id,
        image: product.imageUrl,
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
    };

    return (
        <main className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-auto rounded shadow"
                />

                <div>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <p className="text-blue-600 font-bold text-xl mb-4">
                        ${product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* JSON-LD for structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
