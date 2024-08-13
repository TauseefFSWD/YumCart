import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  const reviews = [
    {
      name: "Jessica Thompson",
      review:
        "YumCart has completely transformed the way I order food! The interface is user-friendly, and I love the variety of restaurants and dishes available. Highly recommend it for anyone who loves great food!",
    },
    {
      name: "Michael Adams",
      review:
        "I’ve tried many food apps, but YumCart stands out with its seamless ordering experience. The real-time order tracking is a game-changer, and the customer service is top-notch.",
    },
    {
      name: "Sarah Johnson",
      review:
        "As a frequent traveler, YumCart is my go-to app for finding amazing local eats. The app’s ability to filter by cuisine and dietary preferences makes it incredibly convenient.",
    },
    {
      name: "David Lee",
      review:
        "YumCart is fantastic! The app’s design is sleek, and the payment process is smooth. I particularly appreciate the detailed restaurant reviews and ratings.",
    },
    {
      name: "Emily Rodriguez",
      review:
        "I love how easy it is to navigate YumCart. The delivery is prompt, and the app’s promotions and discounts are always a nice bonus. It’s definitely my favorite food app!",
    },
    {
      name: "John Smith",
      review:
        "YumCart is a game-changer for busy professionals like me. The quick ordering process and reliable delivery service save me so much time. Plus, the food always arrives hot and fresh!",
    },
    {
      name: "Olivia Brown",
      review:
        "I’ve been using YumCart for months now, and it never disappoints. The app’s features, like saving favorite restaurants and orders, are incredibly useful.",
    },
    {
      name: "Daniel Miller",
      review:
        "The variety of food options on YumCart is impressive. Whether I’m in the mood for sushi or a burger, I can find exactly what I’m craving. The app is user-friendly and efficient.",
    },
    {
      name: "Sophia Wilson",
      review:
        "YumCart has made my food ordering experience so much better. The app’s design is clean and intuitive, and the customer support team is always responsive and helpful.",
    },
    {
      name: "James Taylor",
      review:
        "I’m really impressed with YumCart. The app’s reliability and ease of use make it stand out among other food delivery services. I also appreciate the accurate delivery time estimates.",
    },
  ];

  const teamMembers = [
    {
      name: "Jane Smith",
      role: "Chief Culinary Officer",
      description:
        "Jane brings over 15 years of experience in the culinary world, creating innovative and delectable dishes that our customers love.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Michael Brown",
      role: "Lead Developer",
      description:
        "Michael is a tech wizard with a passion for building seamless user experiences. His expertise in coding ensures our app runs smoothly and efficiently.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Emma Davis",
      role: "Marketing Manager",
      description:
        "Emma's creative marketing strategies and expertise in digital media help us reach more customers and enhance our brand's presence.",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="section">
          <h1 className="section-title">About Us</h1>
          <p className="description">
            Welcome to YumCart, your premier destination for gourmet food and
            exceptional dining experiences. At YumCart, we are passionate about
            delivering high-quality food and unforgettable moments to our
            customers. Our mission is to bring you the best in culinary delights
            with a focus on taste, freshness, and innovation.
          </p>
          <p className="description">
            Our commitment extends beyond just food delivery. At YumCart, we
            focus on delivering a high-quality customer experience, with a team
            dedicated to ensuring your satisfaction. Whether you're ordering for
            a special occasion or just a quick meal, we're here to make your
            dining experience exceptional. We continuously innovate and expand
            our offerings to meet the evolving needs of our customers. Our goal
            is to be the top choice for food delivery, offering unparalleled
            convenience, variety, and quality.
          </p>
        </div>

        <div className="section reviews">
          <h2 className="section-title">Customer Reviews</h2>
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img
                src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                alt={`Reviewer ${review.name}`}
              />
              <div className="review-content">
                <p className="name">{review.name}</p>
                <p>“{review.review}”</p>
                <p>
                  <em>Reviewed on: 2024-08-15</em>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="section team">
          <h2 className="section-title">Our Team</h2>
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={`Team Member ${member.name}`} />
              <div className="team-content">
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section vacancies">
          <h2 className="section-title">Vacancies</h2>
          {[
            {
              title: "Chef",
              description: [
                "Prepare gourmet dishes",
                "Manage kitchen staff",
                "Ensure food quality",
              ],
            },
            {
              title: "Waitstaff",
              description: [
                "Provide excellent customer service",
                "Handle food orders",
                "Maintain a clean dining area",
              ],
            },
            {
              title: "Event Coordinator",
              description: [
                "Plan and execute events",
                "Coordinate with vendors",
                "Manage event logistics",
              ],
            },
          ].map((vacancy, index) => (
            <div className="vacancy-item" key={index}>
              <h3 className="vacancy-title">{vacancy.title}</h3>
              <p className="vacancy-description">
                <ul>
                  {vacancy.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
