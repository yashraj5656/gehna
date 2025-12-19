import "./globals.css";

export const metadata = {
  title: "Gahne – Luxury You Deserve",
  description: "Luxury artificial jewellery brand",
  icons: {
    icon: [
      { url: "/Gahnelogo.png", type: "image/png" },
    ],
  },
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
              {/*<img src="/Gahne-logo.png" alt="Gahne Jewellery" />*/}
              <span>Gahne</span>
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
             {/* <a href="/collections">Collections</a>*/}
              <a href="/about">About</a>
             {/* <a href="/contact">Contact</a>*/}
            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container footer-content">

            <div className="footer-brand">
              <h3>Gahne</h3>
              <p>Luxury You Deserve</p>
            </div>

            <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
<a href="/terms-conditions">Terms & Conditions</a>
<a href="/returns">Returns</a>

            </div>

            <p className="copyright">
              © {new Date().getFullYear()} Gahne. All Rights Reserved.
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}
