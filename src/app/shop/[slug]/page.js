import { products } from "@/app/data/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetail({ params }) {
  // ✅ UNWRAP params
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) return notFound();

  return (
    <main className="container">
      <section className="product-detail">

        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
  <h1>{product.name}</h1>
  <p className="category">{product.category}</p>
  <p className="price">₹{product.price}</p>
  <p className="description">{product.description}</p>

  {!product.inStock && (
    <p className="out-of-stock">Out of Stock</p>
  )}

  <button
    className={`buy-btn big ${!product.inStock ? "disabled" : ""}`}
    disabled={!product.inStock}
  >
    {product.inStock ? "Buy Now" : "Unavailable"}
  </button>
</div>


      </section>
    </main>
  );
}
