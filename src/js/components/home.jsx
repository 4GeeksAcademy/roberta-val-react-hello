import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  const cardsData = [
    {
      title: "Card Title 1",
      text: "This is some example text for card 1.",
      imageUrl: "https://via.placeholder.com/500x325",
      buttonUrl: "#",
      buttonLabel: "Find Out More!"
    },
    {
      title: "Card Title 2",
      text: "This is some example text for card 2.",
      imageUrl: "https://via.placeholder.com/500x325",
      buttonUrl: "#",
      buttonLabel: "Find Out More!"
    },
    {
      title: "Card Title 3",
      text: "This is some example text for card 3.",
      imageUrl: "https://via.placeholder.com/500x325",
      buttonUrl: "#",
      buttonLabel: "Find Out More!"
    },
    {
      title: "Card Title 4",
      text: "This is some example text for card 4.",
      imageUrl: "https://via.placeholder.com/500x325",
      buttonUrl: "#",
      buttonLabel: "Find Out More!"
    }
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
              buttonUrl={card.buttonUrl}
              buttonLabel={card.buttonLabel}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;


