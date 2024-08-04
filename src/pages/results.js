import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BiasBar from "../components/BiasBar";
import "../styles/results.css";
import { Link } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <section>
      <img className="top-gradient" src="/media/top-gradient.png"></img>

      <div className="result-content">
        <Link to="/home">
          <button className="back-button">Back to Home</button>
        </Link>
        <h2>{data.article_title}</h2>
        <br />
        <br></br>
        <h5>Bias based on selected news sources</h5>
        <br></br>
        <div className="news-sources">
          {data.news_source.map((source, index) => (
            <span key={index} className="news-source">
              {source}
            </span>
          ))}
        </div>
        <BiasBar bias={data.bias}/>
        <div className="revised-article-text">
          <h4>Here's an <strong>unbiased</strong> and <strong>kid-friendly</strong> analysis.</h4>
          <br></br>
          <p>{data.rewritten_version}</p>
        </div>
      </div>
    </section>
  );
}
