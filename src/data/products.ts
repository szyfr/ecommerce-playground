import type { ProductDTO } from "@/modules/products/dto/productDTO";

// Import as raw JSON to avoid module resolution issues
const productsData = [
    {
        id: "1",
        slug: "wireless-bluetooth-headphones",
        name: "Wireless Bluetooth Headphones",
        description:
            "High-quality wireless headphones with noise-cancellation feature.",
        price: 99.99,
        imageUrl: "/images/products/headphones.jpg",
        category: "Electronics",
        stock: 25,
    },
    {
        id: "2",
        slug: "smart-watch-series-7",
        name: "Smart Watch Series 7",
        description:
            "Stay connected and track your health with the latest smart watch.",
        price: 199.99,
        imageUrl: "/images/products/smartwatch.jpg",
        category: "Electronics",
        stock: 15,
    },
    {
        id: "3",
        slug: "classic-leather-backpack",
        name: "Classic Leather Backpack",
        description: "Durable and stylish leather backpack for everyday use.",
        price: 79.99,
        imageUrl: "/images/products/backpack.jpg",
        category: "Fashion",
        stock: 10,
    },
    {
        id: "4",
        slug: "running-shoes",
        name: "Running Shoes",
        description:
            "Lightweight running shoes designed for comfort and performance.",
        price: 59.99,
        imageUrl: "/images/products/shoes.jpg",
        category: "Fashion",
        stock: 30,
    },
    {
        id: "5",
        slug: "electric-coffee-grinder",
        name: "Electric Coffee Grinder",
        description:
            "Grind your coffee beans perfectly for a fresh cup every time.",
        price: 49.99,
        imageUrl: "/images/products/coffee-grinder.jpg",
        category: "Home Appliances",
        stock: 20,
    },
] as const;

export const products: ProductDTO[] = productsData as unknown as ProductDTO[];
