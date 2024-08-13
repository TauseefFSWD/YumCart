import React from "react";
import "./PaymentPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PaymentPage = () => {
  return (
    <div>
      <Navbar />
      <div className="payment-page">
        <h1>Payment</h1>
        <p>Please enter your payment details to complete your order.</p>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <button type="submit" className="cta-button">
            Pay Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
