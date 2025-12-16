"use client";

import Link from "next/link";

const COLLECTIONS = [
  {
    id: 1,
    title: "Necklace Collection",
    image: "/collection-necklace.jpg",
    category: "Necklace",
    description: "Royal and elegant necklace sets for weddings & parties.",
  },
  {
    id: 2,
    title: "Earrings Collection",
    image: "/collection-earrings.jpg",
    category: "Earrings",
    description: "Designer earrings crafted for everyday elegance.",
  },
  {
    id: 3,
    title: "Bangles Collection",
    image: "/collection-bangles.jpg",
    category: "Bangles",
    description: "Traditional bangles with a luxurious golden finish.",
  },
  {
    id: 4,
    title: "Rings Collection",
    image: "/collection-rings.jpg",
    category: "Rings",
    description: "Minimal yet classy rings for modern fashion.",
  },
];

export default function CollectionsPage() {
  return (
    <main className="container">

      {/* HERO */}
      <section className="collections-hero">
        <h1>Our Collections</h1>
        <p>
          Explore our carefully curated jewellery collections designed to
          complement every occasion and style.
        </p>
      </section>

      {/* COLLECTION GRID */}
      <section className="collections">
        <div className="collection-grid">

          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.id}
              href={`/shop?category=${collection.category}`}
              className="collection-card"
            >
              <div className="collection-image">
                <img
                  src={collection.image}
                  alt={collection.title}
                />
              </div>

              <div className="collection-content">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <span className="explore-btn">Explore</span>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}
