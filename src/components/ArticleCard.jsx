import React, { useState } from "react";
import "../styles/articles-by-topic.css";

function ArticleCard({ article, topic, onClickArticle, selectedTopic }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!selectedTopic || selectedTopic === topic) {
      onClickArticle(topic, article.id, article.sourceUrl);
      setIsClicked(true);
    }
  };

  return (
    <div
      className="article-card"
      onClick={handleClick}
      style={{
        opacity: isClicked ? 0.3 : 1,
      }}
    >
      <div className="article-cover-image">
        <img src={article.imageUrl} alt={article.source} />
      </div>
      <h6>{article.title}</h6>
      <p className="article-title-preview">{article.source}</p>
    </div>
  );
}

export default ArticleCard;
