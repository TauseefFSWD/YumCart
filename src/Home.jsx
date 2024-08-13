import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import images directly
import pizza1 from "./assets/1.jpg";
import pizza2 from "./assets/2.jpg";
import pizza3 from "./assets/3.jpg";
import pizza4 from "./assets/4.jpg";
import pasta1 from "./assets/5.jpg";
import pasta2 from "./assets/6.jpg";
import pasta3 from "./assets/7.jpg";
import pasta4 from "./assets/8.jpg";
import wings1 from "./assets/9.jpg";
import wings2 from "./assets/10.jpg";
import wings3 from "./assets/11.jpg";
import taco1 from "./assets/12.jpg";
import taco2 from "./assets/13.jpg";
import taco3 from "./assets/14.jpg";
import seafood1 from "./assets/15.jpg";
import seafood2 from "./assets/16.jpg";
import dessert1 from "./assets/17.jpg";
import dessert2 from "./assets/18.jpg";
import dessert3 from "./assets/19.jpg";

const Home = () => {
  const sections = [
    {
      name: "Pizza Paradise",
      dishes: [
        {
          name: "Margherita Pizza",
          description: "Classic cheese and tomato pizza.",
          price: "$10.99",
          image: pizza1,
        },
        {
          name: "Pepperoni Pizza",
          description: "Pepperoni with mozzarella cheese.",
          price: "$12.99",
          image: pizza2,
        },
        {
          name: "BBQ Chicken Pizza",
          description: "Grilled chicken, BBQ sauce, and onions.",
          price: "$13.99",
          image: pizza3,
        },
        {
          name: "Veggie Delight",
          description: "Bell peppers, onions, mushrooms, and olives.",
          price: "$11.99",
          image: pizza4,
        },
      ],
    },
    {
      name: "Pasta Perfection",
      dishes: [
        {
          name: "Spaghetti Bolognese",
          description: "Traditional Italian pasta with beef sauce.",
          price: "$14.99",
          image: pasta1,
        },
        {
          name: "Fettuccine Alfredo",
          description: "Creamy Alfredo sauce with parmesan.",
          price: "$13.49",
          image: pasta2,
        },
        {
          name: "Shrimp Pasta",
          description: "Shrimp in a garlic butter sauce with linguine.",
          price: "$16.99",
          image: pasta3,
        },
        {
          name: "Chicken Parmesan",
          description: "Breaded chicken with marinara sauce and cheese.",
          price: "$15.49",
          image: pasta4,
        },
      ],
    },
    {
      name: "Wings & Burgers",
      dishes: [
        {
          name: "Caesar Wings",
          description: "Crispy romaine, croutons, and Caesar dressing.",
          price: "$8.99",
          image: wings1,
        },
        {
          name: "Greek Style Burger",
          description: "Feta cheese, olives, cucumber, and tomatoes.",
          price: "$9.99",
          image: wings2,
        },
        {
          name: "Chicken Wings Burger",
          description: "Spicy buffalo wings with ranch dip.",
          price: "$11.49",
          image: wings3,
        },
      ],
    },
    {
      name: "Tacos & Pasta",
      dishes: [
        {
          name: "Seafood Style Taco",
          description: "Juicy fish patty with lettuce and tomato.",
          price: "$12.49",
          image: taco1,
        },
        {
          name: "Prawns Taco",
          description: "Grilled chicken breast with mayo.",
          price: "$11.99",
          image: taco2,
        },
        {
          name: "Grilled Salmon",
          description: "Grilled veggies in a whole wheat wrap.",
          price: "$9.99",
          image: taco3,
        },
      ],
    },
    {
      name: "Seafood Sensations",
      dishes: [
        {
          name: "Fish Tacos",
          description: "Crispy fish with slaw and lime.",
          price: "$10.49",
          image: seafood1,
        },
        {
          name: "Vegetarian Wrap",
          description: "Salmon fillet with lemon butter sauce.",
          price: "$18.99",
          image: seafood2,
        },
      ],
    },
    {
      name: "Dessert Delights",
      dishes: [
        {
          name: "Tiramisu",
          description: "Italian coffee-flavored dessert.",
          price: "$7.49",
          image: dessert1,
        },
        {
          name: "Cheesecake",
          description: "Creamy cheesecake with a graham cracker crust.",
          price: "$6.99",
          image: dessert2,
        },
        {
          name: "Chocolate Brownie",
          description: "Rich chocolate brownie with vanilla ice cream.",
          price: "$5.99",
          image: dessert3,
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="home">
        <header className="hero">
          <h1>Welcome to YumCart</h1>
          <p>Your go-to platform for ordering delicious meals</p>
        </header>
        {sections.map((section, sectionIndex) => (
          <section className="menu-section" key={sectionIndex}>
            <h2 className="section-title">{section.name}</h2>
            <div className="dish-list">
              {section.dishes.map((dish, dishIndex) => (
                <div className="dish-card" key={dishIndex}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="dish-image"
                  />
                  <div className="dish-info">
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <p className="price">{dish.price}</p>
                  </div>
                  <a href="/payment" className="cta-button">
                    Order Now
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
