"use client";

import { useEffect, useState } from "react";
import Link from "next/link";



const PRODUCTS = [
  {
    id: 1,
    slug: "royal-necklace-set",
    name: "Royal Necklace Set",
    price: 1299,
    category: "Necklace",
    image: "/product1.jpg",
  },
  {
    id: 2,
    slug: "designer-earrings",
    name: "Designer Earrings",
    price: 699,
    category: "Earrings",
    image: "/product2.jpg",
  },
  {
    id: 3,
    slug: "golden-bangles",
    name: "Golden Bangles",
    price: 899,
    category: "Bangles",
    image: "/product3.jpg",
  },
  {
    id: 4,
    slug: "stone-studded-ring",
    name: "Stone Studded Ring",
    price: 499,
    category: "Rings",
    image: "/product4.jpg",
  },
  {
    id: 5,
    slug: "bridal-choker-set",
    name: "Bridal Choker Set",
    price: 1799,
    category: "Necklace",
    image: "/product5.jpg",
  },
  {
    id: 6,
    slug: "traditional-jhumkas",
    name: "Traditional Jhumkas",
    price: 799,
    category: "Earrings",
    image: "/product6.jpg",
  },
];

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;
    const priceMatch = product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  /* Scroll animation */
  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <main className="container">

      {/* SHOP HERO */}
      {/*<section className="shop-hero">
        <h1>Shop Artificial Jewellery</h1>
        <p>
          Explore our exclusive collection of premium artificial jewellery
          crafted for elegance and everyday luxury.
        </p>
      </section>*/}

      {/* FILTER BAR */}
      <section className="filter-bar">
        {["All", "Necklace", "Earrings", "Bangles", "Rings"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* PRICE FILTER */}
      <section className="price-filter" style={{marginTop:'-1rem'}}>
        <label>
          Max Price: <strong>₹{maxPrice}</strong>
        </label>
        <input
          type="range"
          min="300"
          max="2000"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </section>

      {/* PRODUCTS GRID */}
{/* PRODUCTS GRID */}
<section className="products" style={{marginTop:'-6rem'}}>
  <div className="product-grid">

    {filteredProducts.length === 0 && (
      <p className="no-results">No products found</p>
    )}

    {filteredProducts.map((product) => (
      <Link
        key={product.id}                 // ✅ REQUIRED
        href={`/shop/${product.slug}`}
        className="product-link"
      >
        <div className="product-card fade-up">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">₹{product.price}</p>
          <button className="buy-btn">View Details</button>
        </div>
      </Link>
    ))}

  </div>
</section>


    </main>
  );
}
