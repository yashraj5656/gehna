import "./globals.css";

export const metadata = {
  title: "Gehna – Luxury You Deserve",
  description:
    "Gehna offers premium artificial jewellery crafted for elegance, weddings, parties, and everyday luxury.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* HEADER */}
        <header className="site-header">
          <div className="container header-content">

            {/* LOGO */}
            <div className="logo">
              {/*<img src="/gehna-logo.png" alt="Gehna Jewellery" />*/}
              <span>Gehna</span>
            </div>

            {/* HAMBURGER */}
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </label>

            {/* NAV */}
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/collections">Collections</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container footer-content">

            <div className="footer-brand">
              <h3>Gehna</h3>
              <p>Luxury You Deserve</p>
            </div>

            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Returns</a>
            </div>

            <p className="copyright">
              © {new Date().getFullYear()} Gehna. All Rights Reserved.
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}
