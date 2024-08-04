import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleArticleClick = (topic, articleId, sourceUrl) => {
    if (!selectedTopic) {
      setSelectedTopic(topic);
      setSelectedArticles([{ url: sourceUrl }]);
    } else if (
      selectedTopic === topic &&
      !selectedArticles.some((article) => article.url === sourceUrl)
    ) {
      setSelectedArticles((prevArticles) => [
        ...prevArticles,
        { url: sourceUrl },
      ]);
    }
    setModalVisible(true);
  };

  const handleGenerate = async () => {
    console.log("hi");
    const articleUrls = selectedArticles.map((article) => article.url);
    try {
      const response = await fetch("http://localhost:5000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ article_links: articleUrls }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Data received from API:", data);
      navigate("/results", { state: { data } });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
      <br />
      <Modal
        isVisible={isModalVisible}
        selectedTopic={selectedTopic}
        numArticles={selectedArticles.length}
        selectedArticles={selectedArticles}
        onGenerate={handleGenerate}
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
