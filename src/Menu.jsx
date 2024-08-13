import React from "react";
import "./Menu.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import images
import a1 from "./assets/a1.jpg";
import a2 from "./assets/a2.jpg";
import a3 from "./assets/a3.jpg";
import a4 from "./assets/a4.jpg";
import a5 from "./assets/a5.jpg";
import a6 from "./assets/a6.jpg";
import a7 from "./assets/a7.jpg";
import a8 from "./assets/a8.jpg";
import a9 from "./assets/a9.jpg";
import a10 from "./assets/a10.jpg";
import b1 from "./assets/b1.jpg";
import b2 from "./assets/b2.jpg";
import b3 from "./assets/b3.jpg";
import b4 from "./assets/b4.jpg";
import b5 from "./assets/b5.jpg";
import b6 from "./assets/b6.jpg";
import b7 from "./assets/b7.jpg";
import b8 from "./assets/b8.jpg";
import b9 from "./assets/b9.jpg";
import b10 from "./assets/b10.jpg";
import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";
import c5 from "./assets/c5.jpg";
import c6 from "./assets/c6.jpg";
import c7 from "./assets/c7.jpg";
import c8 from "./assets/c8.jpg";
import c9 from "./assets/c9.jpg";
import c10 from "./assets/c10.jpg";
import d1 from "./assets/d1.jpg";
import d2 from "./assets/d2.jpg";
import d3 from "./assets/d3.jpg";
import d4 from "./assets/d4.jpg";
import d5 from "./assets/d5.jpg";
import d6 from "./assets/d6.jpg";
import d7 from "./assets/d7.jpg";
import d8 from "./assets/d8.jpg";
import d9 from "./assets/d9.jpg";
import d10 from "./assets/d10.jpg";
import e1 from "./assets/e1.jpg";
import e2 from "./assets/e2.jpg";
import e3 from "./assets/e3.jpg";
import e4 from "./assets/e4.jpg";
import e5 from "./assets/e5.jpg";
import e6 from "./assets/e6.jpg";
import e7 from "./assets/e7.jpg";
import e8 from "./assets/e8.jpg";
import e9 from "./assets/e9.jpg";
import e10 from "./assets/e10.jpg";

const Menu = () => {
  const sections = [
    {
      name: "Starters",
      dishes: [
        {
          name: "Bruschetta",
          image: a1,
          description: "Grilled bread with tomatoes, olive oil, and garlic.",
          price: "$8.99",
        },
        {
          name: "Stuffed Mushrooms",
          image: a2,
          description: "Mushrooms filled with cheese and herbs.",
          price: "$10.99",
        },
        {
          name: "Garlic Bread",
          image: a3,
          description: "Crispy garlic bread with herbs.",
          price: "$6.99",
        },
        {
          name: "Caprese Salad",
          image: a4,
          description: "Fresh mozzarella, tomatoes, and basil.",
          price: "$9.99",
        },
        {
          name: "Spinach Artichoke Dip",
          image: a5,
          description: "Creamy dip served with pita bread.",
          price: "$11.99",
        },
        {
          name: "Mozzarella Sticks",
          image: a6,
          description: "Fried mozzarella cheese sticks with marinara sauce.",
          price: "$7.99",
        },
        {
          name: "Buffalo Wings",
          image: a7,
          description: "Spicy chicken wings with celery and ranch.",
          price: "$12.99",
        },
        {
          name: "Onion Rings",
          image: a8,
          description: "Crispy, golden-fried onion rings.",
          price: "$5.99",
        },
        {
          name: "Queso Dip",
          image: a9,
          description: "Cheese dip with tortilla chips.",
          price: "$8.49",
        },
        {
          name: "Chicken Satay",
          image: a10,
          description: "Grilled chicken skewers with peanut sauce.",
          price: "$10.49",
        },
      ],
    },
    {
      name: "Main Courses",
      dishes: [
        {
          name: "Margherita Pizza",
          image: b1,
          description: "Classic pizza with tomatoes, mozzarella, and basil.",
          price: "$12.99",
        },
        {
          name: "Pasta Carbonara",
          image: b2,
          description: "Pasta with pancetta, egg, and cheese sauce.",
          price: "$14.99",
        },
        {
          name: "Grilled Chicken",
          image: b3,
          description: "Juicy grilled chicken with herbs.",
          price: "$15.99",
        },
        {
          name: "Beef Stroganoff",
          image: b4,
          description: "Tender beef in a creamy mushroom sauce over noodles.",
          price: "$16.99",
        },
        {
          name: "Vegetable Stir-Fry",
          image: b5,
          description: "Mixed vegetables stir-fried with soy sauce.",
          price: "$13.49",
        },
        {
          name: "Shrimp Scampi",
          image: b6,
          description: "Shrimp sautéed in garlic, lemon, and butter.",
          price: "$17.99",
        },
        {
          name: "BBQ Ribs",
          image: b7,
          description: "Tender ribs with smoky BBQ sauce.",
          price: "$18.99",
        },
        {
          name: "Chicken Alfredo",
          image: b8,
          description: "Chicken and pasta in a creamy Alfredo sauce.",
          price: "$14.99",
        },
        {
          name: "Lamb Chops",
          image: b9,
          description: "Grilled lamb chops with rosemary and garlic.",
          price: "$21.99",
        },
        {
          name: "Vegetarian Lasagna",
          image: b10,
          description: "Lasagna layered with vegetables and cheese.",
          price: "$13.99",
        },
      ],
    },
    {
      name: "Desserts",
      dishes: [
        {
          name: "Tiramisu",
          image: c1,
          description:
            "Traditional Italian dessert with coffee and mascarpone.",
          price: "$7.99",
        },
        {
          name: "Cheesecake",
          image: c2,
          description:
            "Rich and creamy cheesecake with a graham cracker crust.",
          price: "$8.99",
        },
        {
          name: "Chocolate Mousse",
          image: c3,
          description: "Light and fluffy chocolate mousse.",
          price: "$9.99",
        },
        {
          name: "Apple Pie",
          image: c4,
          description: "Classic apple pie with a flaky crust.",
          price: "$6.99",
        },
        {
          name: "Panna Cotta",
          image: c5,
          description: "Creamy Italian dessert with berry sauce.",
          price: "$7.49",
        },
        {
          name: "Lemon Sorbet",
          image: c6,
          description: "Refreshing lemon sorbet.",
          price: "$5.99",
        },
        {
          name: "Brownies",
          image: c7,
          description: "Chewy chocolate brownies.",
          price: "$4.99",
        },
        {
          name: "Crème Brûlée",
          image: c8,
          description: "Vanilla custard with a caramelized top.",
          price: "$8.49",
        },
        {
          name: "Cannoli",
          image: c9,
          description: "Italian pastry filled with sweet ricotta cheese.",
          price: "$6.49",
        },
        {
          name: "Mango Sticky Rice",
          image: c10,
          description: "Sweet sticky rice with ripe mangoes.",
          price: "$7.99",
        },
      ],
    },
    {
      name: "Beverages",
      dishes: [
        {
          name: "Espresso",
          image: d1,
          description: "Strong and rich espresso coffee.",
          price: "$4.99",
        },
        {
          name: "Mojito",
          image: d2,
          description: "Refreshing cocktail with mint, lime, and rum.",
          price: "$9.99",
        },
        {
          name: "Smoothie",
          image: d3,
          description: "Healthy fruit smoothie.",
          price: "$6.99",
        },
        {
          name: "Iced Tea",
          image: d4,
          description: "Chilled tea with lemon.",
          price: "$3.99",
        },
        {
          name: "Hot Chocolate",
          image: d5,
          description: "Warm and creamy hot chocolate.",
          price: "$4.49",
        },
        {
          name: "Craft Beer",
          image: d6,
          description: "Locally brewed craft beer.",
          price: "$5.99",
        },
        {
          name: "Red Wine",
          image: d7,
          description: "A glass of rich red wine.",
          price: "$7.99",
        },
        {
          name: "White Wine",
          image: d8,
          description: "A glass of crisp white wine.",
          price: "$7.99",
        },
        {
          name: "Lemonade",
          image: d9,
          description: "Freshly squeezed lemonade.",
          price: "$4.49",
        },
        {
          name: "Cappuccino",
          image: d10,
          description: "Coffee with steamed milk and foam.",
          price: "$5.49",
        },
      ],
    },
    {
      name: "Sides",
      dishes: [
        {
          name: "French Fries",
          image: e1,
          description: "Crispy golden fries.",
          price: "$4.99",
        },
        {
          name: "Onion Rings",
          image: e2,
          description: "Crispy fried onion rings.",
          price: "$5.99",
        },
        {
          name: "Coleslaw",
          image: e3,
          description: "Creamy and tangy coleslaw.",
          price: "$3.99",
        },
        {
          name: "Garlic Mashed Potatoes",
          image: e4,
          description: "Creamy mashed potatoes with garlic.",
          price: "$5.49",
        },
        {
          name: "Caesar Salad",
          image: e5,
          description: "Crisp romaine lettuce with Caesar dressing.",
          price: "$6.99",
        },
        {
          name: "Breadsticks",
          image: e6,
          description: "Soft, warm breadsticks with butter.",
          price: "$4.49",
        },
        {
          name: "Sweet Potato Fries",
          image: e7,
          description: "Sweet potato fries with a hint of cinnamon.",
          price: "$5.49",
        },
        {
          name: "Rice Pilaf",
          image: e8,
          description: "Fluffy rice cooked with vegetables.",
          price: "$4.99",
        },
        {
          name: "Grilled Vegetables",
          image: e9,
          description: "Assorted vegetables grilled to perfection.",
          price: "$6.49",
        },
        {
          name: "Baked Beans",
          image: e10,
          description: "Hearty baked beans in a tangy sauce.",
          price: "$5.99",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="menu-page">
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

export default Menu;
