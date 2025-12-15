import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Elegant Artificial Jewellery</h1>
          <p>
            Discover premium-quality artificial jewellery designed to match
            your elegance. Perfect for weddings, parties & daily fashion.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="hero-image">
          {/* Replace src with your image */}
          <img src="/gehna.jpg" alt="Artificial Jewellery" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products">
        <h2>Featured Collection</h2>

        <div className="product-grid">

          {/* PRODUCT CARD */}
          <div className="product-card">
            <img src="/product1.jpg" alt="Necklace" />
            <h3>Royal Necklace Set</h3>
            <p className="price">₹1,299</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card">
            <img src="/product1.jpg" alt="Earrings" />
            <h3>Designer Earrings</h3>
            <p className="price">₹699</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card">
            <img src="/product1.jpg" alt="Bangles" />
            <h3>Golden Bangles</h3>
            <p className="price">₹899</p>
            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product-card">
            <img src="/product1.jpg" alt="Ring" />
            <h3>Stone Studded Ring</h3>
            <p className="price">₹499</p>
            <button className="buy-btn">Buy Now</button>
          </div>

        </div>
      </section>

    </main>
  );
}
