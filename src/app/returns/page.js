"use client";

export default function ReturnsPage() {
  return (
    <main className="container legal-page">
      <h1>Returns & Refund Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        At <strong>Gahne</strong>, customer satisfaction is important to us.
        Please read our Returns & Refund Policy carefully before making a
        purchase.
      </p>

      <h2>Return Eligibility</h2>
      <ul>
        <li>Returns are accepted only for damaged or incorrect items</li>
        <li>Return requests must be raised within 48 hours of delivery</li>
        <li>Product must be unused and in original packaging</li>
      </ul>

      <h2>Non-Returnable Items</h2>
      <ul>
        <li>Used or worn jewellery</li>
        <li>Items damaged due to customer mishandling</li>
        <li>Products bought during clearance sales (if applicable)</li>
      </ul>

      <h2>Refund Process</h2>
      <p>
        Once the returned item is inspected and approved, the refund will be
        processed to the original payment method within 5–7 business days.
      </p>

      <h2>Exchange Policy</h2>
      <p>
        Exchanges may be offered based on product availability.
      </p>

      <h2>Contact Us</h2>
      <p>
        For return requests or queries, please reach out through our Contact
        page.
      </p>
    </main>
  );
}
