import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleCard from "../components/ArticleCard";
import "../styles/articles-by-topic.css";

function ArticleCarousel({ topic, articles, articleOnClick, selectedTopic }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="article-row">
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            topic={topic}
            title={article.title}
            onClickArticle={articleOnClick}
            selectedTopic={selectedTopic}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ArticleCarousel;
