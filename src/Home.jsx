import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const sections = [
    {
      name: "Pizza Paradise",
      dishes: [
        {
          name: "Margherita Pizza",
          description: "Classic cheese and tomato pizza.",
          price: "$10.99",
          image: "/src/assets/1.jpg",
        },
        {
          name: "Pepperoni Pizza",
          description: "Pepperoni with mozzarella cheese.",
          price: "$12.99",
          image: "/src/assets/2.jpg",
        },
        {
          name: "BBQ Chicken Pizza",
          description: "Grilled chicken, BBQ sauce, and onions.",
          price: "$13.99",
          image: "/src/assets/3.jpg",
        },
        {
          name: "Veggie Delight",
          description: "Bell peppers, onions, mushrooms, and olives.",
          price: "$11.99",
          image: "/src/assets/4.jpg",
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
          image: "/src/assets/5.jpg",
        },
        {
          name: "Fettuccine Alfredo",
          description: "Creamy Alfredo sauce with parmesan.",
          price: "$13.49",
          image: "/src/assets/6.jpg",
        },
        {
          name: "Shrimp Pasta",
          description: "Shrimp in a garlic butter sauce with linguine.",
          price: "$16.99",
          image: "/src/assets/7.jpg",
        },
        {
          name: "Chicken Parmesan",
          description: "Breaded chicken with marinara sauce and cheese.",
          price: "$15.49",
          image: "/src/assets/8.jpg",
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
          image: "/src/assets/9.jpg",
        },
        {
          name: "Greek Style Burger",
          description: "Feta cheese, olives, cucumber, and tomatoes.",
          price: "$9.99",
          image: "/src/assets/10.jpg",
        },
        {
          name: "Chicken Wings Burger",
          description: "Spicy buffalo wings with ranch dip.",
          price: "$11.49",
          image: "/src/assets/11.jpg",
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
          image: "/src/assets/12.jpg",
        },
        {
          name: "Prawns Taco",
          description: "Grilled chicken breast with mayo.",
          price: "$11.99",
          image: "/src/assets/13.jpg",
        },
        {
          name: "Grilled Salmon",
          description: "Grilled veggies in a whole wheat wrap.",
          price: "$9.99",
          image: "/src/assets/14.jpg",
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
          image: "/src/assets/15.jpg",
        },
        {
          name: "Vegetarian Wrap",
          description: "Salmon fillet with lemon butter sauce.",
          price: "$18.99",
          image: "/src/assets/16.jpg",
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
          image: "/src/assets/17.jpg",
        },
        {
          name: "Cheesecake",
          description: "Creamy cheesecake with a graham cracker crust.",
          price: "$6.99",
          image: "/src/assets/18.jpg",
        },
        {
          name: "Chocolate Brownie",
          description: "Rich chocolate brownie with vanilla ice cream.",
          price: "$5.99",
          image: "/src/assets/19.jpg",
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
