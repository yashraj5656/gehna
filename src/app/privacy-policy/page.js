"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="container legal-page">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        At <strong>Gehna</strong>, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your data.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Name, phone number, email address, and shipping address</li>
        <li>Order details and purchase history</li>
        <li>Payment information (processed securely by third-party gateways)</li>
        <li>Browsing data for website improvement</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process and deliver your orders</li>
        <li>To provide customer support</li>
        <li>To improve our products and services</li>
        <li>To send order updates and important notifications</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal
        data. Payment information is handled securely by trusted payment
        providers.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may share limited information with delivery partners and payment
        gateways strictly for order fulfillment purposes.
      </p>

      <h2>Your Consent</h2>
      <p>
        By using our website, you consent to our Privacy Policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any privacy-related concerns, please contact us via our website.
      </p>
    </main>
  );
}
