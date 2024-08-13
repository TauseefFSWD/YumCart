import React from "react";
import "./Menu.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Menu = () => {
  const sections = [
    {
      name: "Starters",
      dishes: [
        {
          name: "Bruschetta",
          image: "/src/assets/a1.jpg",
          description: "Grilled bread with tomatoes, olive oil, and garlic.",
          price: "$8.99",
        },
        {
          name: "Stuffed Mushrooms",
          image: "/src/assets/a2.jpg",
          description: "Mushrooms filled with cheese and herbs.",
          price: "$10.99",
        },
        {
          name: "Garlic Bread",
          image: "/src/assets/a3.jpg",
          description: "Crispy garlic bread with herbs.",
          price: "$6.99",
        },
        {
          name: "Caprese Salad",
          image: "/src/assets/a4.jpg",
          description: "Fresh mozzarella, tomatoes, and basil.",
          price: "$9.99",
        },
        {
          name: "Spinach Artichoke Dip",
          image: "/src/assets/a5.jpg",
          description: "Creamy dip served with pita bread.",
          price: "$11.99",
        },
        {
          name: "Mozzarella Sticks",
          image: "/src/assets/a6.jpg",
          description: "Fried mozzarella cheese sticks with marinara sauce.",
          price: "$7.99",
        },
        {
          name: "Buffalo Wings",
          image: "/src/assets/a7.jpg",
          description: "Spicy chicken wings with celery and ranch.",
          price: "$12.99",
        },
        {
          name: "Onion Rings",
          image: "/src/assets/a8.jpg",
          description: "Crispy, golden-fried onion rings.",
          price: "$5.99",
        },
        {
          name: "Queso Dip",
          image: "/src/assets/a9.jpg",
          description: "Cheese dip with tortilla chips.",
          price: "$8.49",
        },
        {
          name: "Chicken Satay",
          image: "/src/assets/a10.jpg",
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
          image: "/src/assets/b1.jpg",
          description: "Classic pizza with tomatoes, mozzarella, and basil.",
          price: "$12.99",
        },
        {
          name: "Pasta Carbonara",
          image: "/src/assets/b2.jpg",
          description: "Pasta with pancetta, egg, and cheese sauce.",
          price: "$14.99",
        },
        {
          name: "Grilled Chicken",
          image: "/src/assets/b3.jpg",
          description: "Juicy grilled chicken with herbs.",
          price: "$15.99",
        },
        {
          name: "Beef Stroganoff",
          image: "/src/assets/b4.jpg",
          description: "Tender beef in a creamy mushroom sauce over noodles.",
          price: "$16.99",
        },
        {
          name: "Vegetable Stir-Fry",
          image: "/src/assets/b5.jpg",
          description: "Mixed vegetables stir-fried with soy sauce.",
          price: "$13.49",
        },
        {
          name: "Shrimp Scampi",
          image: "/src/assets/b6.jpg",
          description: "Shrimp sautéed in garlic, lemon, and butter.",
          price: "$17.99",
        },
        {
          name: "BBQ Ribs",
          image: "/src/assets/b7.jpg",
          description: "Tender ribs with smoky BBQ sauce.",
          price: "$18.99",
        },
        {
          name: "Chicken Alfredo",
          image: "/src/assets/b8.jpg",
          description: "Chicken and pasta in a creamy Alfredo sauce.",
          price: "$14.99",
        },
        {
          name: "Lamb Chops",
          image: "/src/assets/b9.jpg",
          description: "Grilled lamb chops with rosemary and garlic.",
          price: "$21.99",
        },
        {
          name: "Vegetarian Lasagna",
          image: "/src/assets/b10.jpg",
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
          image: "/src/assets/c1.jpg",
          description:
            "Traditional Italian dessert with coffee and mascarpone.",
          price: "$7.99",
        },
        {
          name: "Cheesecake",
          image: "/src/assets/c2.jpg",
          description:
            "Rich and creamy cheesecake with a graham cracker crust.",
          price: "$8.99",
        },
        {
          name: "Chocolate Mousse",
          image: "/src/assets/c3.jpg",
          description: "Light and fluffy chocolate mousse.",
          price: "$9.99",
        },
        {
          name: "Apple Pie",
          image: "/src/assets/c4.jpg",
          description: "Classic apple pie with a flaky crust.",
          price: "$6.99",
        },
        {
          name: "Panna Cotta",
          image: "/src/assets/c5.jpg",
          description: "Creamy Italian dessert with berry sauce.",
          price: "$7.49",
        },
        {
          name: "Lemon Sorbet",
          image: "/src/assets/c6.jpg",
          description: "Refreshing lemon sorbet.",
          price: "$5.99",
        },
        {
          name: "Brownies",
          image: "/src/assets/c7.jpg",
          description: "Chewy chocolate brownies.",
          price: "$4.99",
        },
        {
          name: "Crème Brûlée",
          image: "/src/assets/c8.jpg",
          description: "Vanilla custard with a caramelized top.",
          price: "$8.49",
        },
        {
          name: "Cannoli",
          image: "/src/assets/c9.jpg",
          description: "Italian pastry filled with sweet ricotta cheese.",
          price: "$6.49",
        },
        {
          name: "Mango Sticky Rice",
          image: "/src/assets/c10.jpg",
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
          image: "/src/assets/d1.jpg",
          description: "Strong and rich espresso coffee.",
          price: "$4.99",
        },
        {
          name: "Mojito",
          image: "/src/assets/d2.jpg",
          description: "Refreshing cocktail with mint, lime, and rum.",
          price: "$9.99",
        },
        {
          name: "Smoothie",
          image: "/src/assets/d3.jpg",
          description: "Healthy fruit smoothie.",
          price: "$6.99",
        },
        {
          name: "Iced Tea",
          image: "/src/assets/d4.jpg",
          description: "Chilled tea with lemon.",
          price: "$3.99",
        },
        {
          name: "Hot Chocolate",
          image: "/src/assets/d5.jpg",
          description: "Warm and creamy hot chocolate.",
          price: "$4.49",
        },
        {
          name: "Craft Beer",
          image: "/src/assets/d6.jpg",
          description: "Locally brewed craft beer.",
          price: "$5.99",
        },
        {
          name: "Red Wine",
          image: "/src/assets/d7.jpg",
          description: "A glass of rich red wine.",
          price: "$7.99",
        },
        {
          name: "White Wine",
          image: "/src/assets/d8.jpg",
          description: "A glass of crisp white wine.",
          price: "$7.99",
        },
        {
          name: "Lemonade",
          image: "/src/assets/d9.jpg",
          description: "Freshly squeezed lemonade.",
          price: "$4.49",
        },
        {
          name: "Cappuccino",
          image: "/src/assets/d10.jpg",
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
          image: "/src/assets/e1.jpg",
          description: "Crispy golden fries.",
          price: "$4.99",
        },
        {
          name: "Onion Rings",
          image: "/src/assets/e2.jpg",
          description: "Crispy fried onion rings.",
          price: "$5.99",
        },
        {
          name: "Coleslaw",
          image: "/src/assets/e3.jpg",
          description: "Creamy and tangy coleslaw.",
          price: "$3.99",
        },
        {
          name: "Garlic Mashed Potatoes",
          image: "/src/assets/e4.jpg",
          description: "Creamy mashed potatoes with garlic.",
          price: "$5.49",
        },
        {
          name: "Caesar Salad",
          image: "/src/assets/e5.jpg",
          description: "Crisp romaine lettuce with Caesar dressing.",
          price: "$6.99",
        },
        {
          name: "Breadsticks",
          image: "/src/assets/e6.jpg",
          description: "Soft, warm breadsticks with butter.",
          price: "$4.49",
        },
        {
          name: "Sweet Potato Fries",
          image: "/src/assets/e7.jpg",
          description: "Sweet potato fries with a hint of cinnamon.",
          price: "$5.49",
        },
        {
          name: "Rice Pilaf",
          image: "/src/assets/e8.jpg",
          description: "Fluffy rice cooked with vegetables.",
          price: "$4.99",
        },
        {
          name: "Grilled Vegetables",
          image: "/src/assets/e9.jpg",
          description: "Assorted vegetables grilled to perfection.",
          price: "$6.49",
        },
        {
          name: "Baked Beans",
          image: "/src/assets/e10.jpg",
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
