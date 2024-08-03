import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import internationalStudents from "../data/articles";

function ArticleCarousel({ imageUrl, title, numArticles }) {
  const articleArray = Array.from({ length: numArticles }, (_, i) => i + 1);

  return (
    <Carousel autoPlay swipeable infiniteLoop centerMode showThumbs={false}>
      {internationalStudents.map((i) => (
        <div key={i}>
          <h5>{i.title}</h5>
          <img src={i.imageUrl} alt={`Slide ${i}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default ArticleCarousel;
