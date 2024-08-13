import React from "react";
import "./Services.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceCard = ({ title, images, description, features }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <div className="card-images">
      {images.map((img, index) => (
        <img key={index} src={img} alt={title} className="card-image" />
      ))}
    </div>
    <p>{description}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services-container">
        <h1>Our Services</h1>

        {/* Dine-in Hotels Section */}
        <section className="service-section">
          <h2>Dine-in Hotels</h2>
          <div className="service-cards">
            <ServiceCard
              title="Luxury Dining Experience"
              images={[
                "/src/assets/L1.jpg",
                "/src/assets/L2.jpg",
                "/src/assets/L3.jpg",
              ]}
              description="Enjoy an exquisite dining experience with world-class cuisine and elegant ambiance."
              features={[
                "Gourmet Cuisine",
                "Elegant Atmosphere",
                "Exceptional Service",
              ]}
            />
            <ServiceCard
              title="Family-Friendly Dining"
              images={[
                "/src/assets/F1.jpg",
                "/src/assets/F2.jpg",
                "/src/assets/F3.jpg",
              ]}
              description="Relax with your family in a cozy environment with a diverse menu for all ages."
              features={[
                "Family Menu Options",
                "Kid-Friendly",
                "Casual Atmosphere",
              ]}
            />
          </div>
        </section>

        {/* Live Events Section */}
        <section className="service-section">
          <h2>Live Events</h2>
          <div className="service-cards">
            <ServiceCard
              title="Concerts and Shows"
              images={[
                "/src/assets/co1.jpg",
                "/src/assets/co2.jpg",
                "/src/assets/co3.jpg",
              ]}
              description="Experience live music and performances from top artists and entertainers."
              features={["Live Music", "Top Performers", "Vibrant Atmosphere"]}
            />
            <ServiceCard
              title="Theatre Productions"
              images={[
                "/src/assets/t1.jpg",
                "/src/assets/t2.jpg",
                "/src/assets/t3.jpg",
              ]}
              description="Enjoy captivating theatre performances in a professional setting."
              features={[
                "Diverse Productions",
                "Talented Actors",
                "Intimate Setting",
              ]}
            />
          </div>
        </section>

        {/* Exclusive Deals Section */}
        <section className="service-section">
          <h2>Exclusive Deals</h2>
          <div className="service-cards">
            <ServiceCard
              title="Dining Discounts"
              images={[
                "/src/assets/di1.jpg",
                "/src/assets/di2.jpg",
                "/src/assets/di3.jpg",
              ]}
              description="Take advantage of special offers and discounts on dining experiences."
              features={[
                "Seasonal Discounts",
                "Special Offers",
                "Loyalty Rewards",
              ]}
            />
            <ServiceCard
              title="Event Packages"
              images={[
                "/src/assets/ev1.jpg",
                "/src/assets/ev2.jpg",
                "/src/assets/ev3.jpg",
              ]}
              description="Get exclusive packages for live events and theatre shows."
              features={["Exclusive Packages", "Premium Seating", "VIP Access"]}
            />
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-content">
            <div className="testimonial">
              <p>
                "The dining experience was incredible. The atmosphere was
                perfect, and the food was outstanding!"
              </p>
              <span>- Jane Doe</span>
            </div>
            <div className="testimonial">
              <p>
                "Attending live events through this service has been a highlight
                of my year. Highly recommended!"
              </p>
              <span>- John Smith</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or need further information about our
            services, feel free to contact us:
          </p>
          <form className="contact-form">
            <div>
              <label>Name:</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Message:</label>
              <textarea rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
