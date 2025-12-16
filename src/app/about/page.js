"use client";

export default function AboutPage() {
  return (
    <main className="container">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Gehna</h1>
        <p>Luxury You Deserve</p>
      </section>

      {/* STORY */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Gehna was founded with a simple vision — to make elegant and
          premium-looking artificial jewellery accessible to everyone.
          We believe that luxury should not come with an unaffordable price tag.
        </p>

        <p>
          We are not manufacturers. Instead, we carefully curate and collect
          the finest artificial jewellery from trusted artisans and suppliers
          across India. Each piece is handpicked for its quality, design,
          durability, and elegance.
        </p>
      </section>

      {/* FOUNDERS */}
      <section className="about-section founders">
        <h2>Meet the Founders</h2>

        <div className="founder-grid">

          <div className="founder-card">
            <div className="founder-avatar">YS</div>
            <h3>Yashraj Singh</h3>
            <p className="founder-role">Co-Founder</p>
            <p>
              Yashraj Singh brings a keen eye for design and a strong
              understanding of modern fashion trends. His focus is on curating
              jewellery that blends traditional elegance with contemporary
              style.
            </p>
          </div>

          <div className="founder-card">
            <div className="founder-avatar">DS</div>
            <h3>Divyansh Sen</h3>
            <p className="founder-role">Co-Founder</p>
            <p>
              Divyansh Sen focuses on sourcing, quality control, and ensuring
              that every piece offered on Gehna meets our standards of beauty
              and affordability. His goal is to deliver value without
              compromising on quality.
            </p>
          </div>

        </div>
      </section>

      {/* WHY GEHNA */}
      <section className="about-section">
        <h2>Why Choose Gehna?</h2>

        <ul className="about-points">
          <li>Curated collections from across India</li>
          <li>Premium designs at affordable prices</li>
          <li>Perfect for weddings, parties, and daily wear</li>
          <li>Quality-checked artificial jewellery</li>
          <li>Trusted reseller platform</li>
        </ul>
      </section>

      {/* MISSION */}
      <section className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to become a trusted destination for artificial
          jewellery lovers by offering stylish collections, transparent
          pricing, and a seamless shopping experience — all while celebrating
          the diversity of Indian jewellery craftsmanship.
        </p>
      </section>

    </main>
  );
}
