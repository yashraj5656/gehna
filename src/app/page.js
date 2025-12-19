"use client";

import { useEffect } from "react";

export default function HomePage() {

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
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Elegant Artificial Jewellery</h1>
          <p>
            Discover premium-quality artificial jewellery designed to match
            your elegance. Perfect for weddings, parties & daily fashion.
          </p><a href="./shop">
          <button className="shop-btn" >Shop Now</button></a>
        </div>

        <div className="hero-image">
          <img src="/gahne1.jpg" alt="Artificial Jewellery" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products">
        <h2>Featured Collection</h2>

        <div className="product-grid">

          <div className="product-card fade-up">
            <img src="/product1.jpg" alt="Necklace" />
            <h3>Royal Necklace Set</h3>
            <p className="price">₹1,299</p>
            <a href="./shop">
            <button className="buy-btn">View Collection</button></a>
          </div>

          <div className="product-card fade-up">
            <img src="/product2.jpg" alt="Earrings" />
            <h3>Designer Earrings</h3>
            <p className="price">₹699</p>
            <a href="./shop">
            <button className="buy-btn">View Collection</button></a>
          </div>

          <div className="product-card fade-up">
            <img src="/product3.jpg" alt="Bangles" />
            <h3>Golden Bangles</h3>
            <p className="price">₹899</p>
            <a href="./shop">
            <button className="buy-btn">View Collection</button></a>
          </div>

          <div className="product-card fade-up">
            <img src="/product4.jpg" alt="Ring" />
            <h3>Stone Studded Ring</h3>
            <p className="price">₹499</p>
            <a href="./shop">
            <button className="buy-btn">View Collection</button></a>
          </div>
          <div className="product-card fade-up">
            <img src="/product5.jpg" alt="Ring" />
            <h3>Bridal Choker Set</h3>
            <p className="price">₹1799</p>
            <a href="./shop">
            <button className="buy-btn">View Collection</button></a>
          </div>
          <div className="product-card fade-up">
            <img src="/product6.jpg" alt="Ring" />
            <h3>Traditional Jhumkas</h3>
            <p className="price">₹799</p>
            <a href="./shop">
            <button className="buy-btn">View Collection</button></a>
          </div>
        </div>
      </section>

    </main>
  );
}
