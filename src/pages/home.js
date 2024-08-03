import React from "react";
import "../styles/home.css";
import ArticleCarousel from "../components/ArticleCarousel";

const bannerStyle = {
  backgroundImage: "url(/media/faded-homebackground.png)",
  width: "100vw",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export default function Home() {
  return (
    <section id="home">
      <div className="home-banner" style={bannerStyle}>
        <div className="banner-content">
          <img className="logo" src="./media/newsflix-logo.png" />
          <h1>What's trending</h1>
          <h3>This is a shorter one-liner ab out our mission statement.</h3>
          <p>
            This is a sentence describing our mission statement. We are trying
            to replicated the Netflix home page. This is filler text until we
            have a formal statement.
          </p>
        </div>
      </div>
      <div className="news-topic-container">
          <ArticleCarousel

          />
      </div>
      <ArticleCarousel />{" "}
    </section>
  );
}
