import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from './articleCard';

const ArticleList = ({ articles }) => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} onClick={() => handleCardClick(article.link)}>
          <ArticleCard
            image={article.image}
            title={article.title}
            link={article.link}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;