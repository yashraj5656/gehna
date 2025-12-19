"use client";

export default function TermsConditionsPage() {
  return (
    <main className="container legal-page">
      <h1>Terms & Conditions</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        Welcome to <strong>Gahne</strong>. By accessing or using our website,
        you agree to comply with and be bound by the following Terms &
        Conditions.
      </p>

      <h2>About Gahne</h2>
      <p>
        Gahne is a reseller platform that curates artificial jewellery from
        trusted suppliers across India. We are not manufacturers of the
        products listed on this website.
      </p>

      <h2>Product Information</h2>
      <p>
        We make every effort to display product images and descriptions
        accurately. However, slight variations in color or design may occur
        due to lighting and screen differences.
      </p>

      <h2>Pricing & Payments</h2>
      <ul>
        <li>All prices are listed in INR</li>
        <li>Prices may change without prior notice</li>
        <li>Payments are processed via secure payment gateways</li>
      </ul>

      <h2>Order Acceptance</h2>
      <p>
        We reserve the right to cancel or refuse any order due to availability,
        pricing errors, or other unforeseen issues.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Gahne shall not be liable for any indirect, incidental, or consequential
        damages arising from the use of our website or products.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions at any time. Continued use of
        the website implies acceptance of the updated terms.
      </p>
    </main>
  );
}
