import React from "react";
import { FaMap } from "react-icons/fa";
import tourImg1 from "../images/tour-1.jpeg";
import tourImg2 from "../images/tour-2.jpeg";
import tourImg3 from "../images/tour-3.jpeg";
import tourImg4 from "../images/tour-4.jpeg";

export const tours = [
  {
    id: 1,
    image: tourImg1,
    tourDate: "august 26th, 2020",
    tourBodyText: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    day: " 6 Days",
    price: "From $2100",
  },

  {
    id: 2,
    image: tourImg2,
    tourDate: "October 1th, 2020",
    tourBodyText: "Best Of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    day: " 11 Days",
    price: "From $1400",
  },

  {
    id: 3,
    image: tourImg3,
    tourDate: "September 15th, 2020",
    tourBodyText: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    day: " 8 Days",
    price: "From $5000",
  },

  {
    id: 4,
    image: tourImg4,
    tourDate: "December 5th, 2019",
    tourBodyText: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    day: " 20 Days",
    price: "From $3300",
  },
];

const Tours = () => {
  return (
    <section className="tour-section" id="tours">
      <div className="tour-title">
        <h1>
          featured <span className="tour-span">tours</span>
        </h1>
      </div>

      <div className="tour-card">
        {tours.map((tour) => {
          const {
            id,
            image,
            tourDate,
            tourBodyText,
            text,
            location,
            day,
            price,
          } = tour;

          return (
            <article className="tour" key={id}>
              <div class="tour-img-container">
                <img src={image} alt="" className="tour-img" />
                <p class="tour-date">{tourDate}</p>
              </div>
              <div className="tour-body">
                <h4>{tourBodyText}</h4>
                <p className="tour-subtext">{text}</p>
                <div className="tour-footer">
                  <span className="tour-footer-span">
                    <FaMap className="tour-map-icon" />
                    {location}
                  </span>
                  <p className="tour-days"> {day}</p>
                  <p className="tour-price">{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
