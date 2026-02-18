import Link from "next/link";

export default function Home() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Hello World</h1>
            <Link
                href="/products"
                className="text-blue-600 hover:underline font-medium"
            >
                Browse Products →
            </Link>
        </div>
    );
}
