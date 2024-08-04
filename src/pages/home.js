import React, { useState } from "react";
import "../styles/home.css";
import ArticleCarousel from "../components/ArticleCarousel";
import articlesByTopic from "../data/articles";
import "../styles/articles-by-topic.css";
import Modal from "../components/Modal";

const bannerStyle = {
  backgroundImage: "url(/media/faded-homebackground.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "85vh",
};

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleArticleClick = (topic, articleId, sourceUrl) => {
    if (!selectedTopic) {
      setSelectedTopic(topic);
      setSelectedArticles([{ id: articleId, url: sourceUrl }]);
    } else if (
      selectedTopic === topic &&
      !selectedArticles.some((article) => article.id === articleId)
    ) {
      setSelectedArticles((prevArticles) => [
        ...prevArticles,
        { id: articleId, url: sourceUrl },
      ]);
    }
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedArticles([]);
    setSelectedTopic(null);
  };

  return (
    <section id="home">
      <div className="home-banner" style={bannerStyle}>
        <div className="banner-content">
          <img
            className="logo"
            src="./media/newsflix-logo.png"
            alt="Newsflix Logo"
          />
          <br />
          <h1>What's trending?</h1>
          <h5>Empowering today's youth with unbiased political insights.</h5>
          <p>
            This is a sentence describing our mission statement. We are trying
            to replicate the Netflix home page. This is filler text until we
            have a formal statement.
          </p>
        </div>
      </div>
      <br></br>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        selectedTopic={selectedTopic}
        numArticles={selectedArticles.length}
      />
      <div className="news-topic-container">
        {articlesByTopic.map((topic) => (
          <div key={topic.id}>
            <h4>{topic.topic}</h4>
            <ArticleCarousel
              topic={topic.topic}
              articles={topic.articles}
              articleOnClick={handleArticleClick}
              selectedTopic={selectedTopic}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
