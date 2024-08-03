import React, { useEffect } from "react";
import "../styles/results.css";
import summarizedArticles from "../data/summarizedData";
import { Link } from "react-router-dom";

export default function Results() {
  useEffect(() => {
    document.documentElement.style.setProperty("--start-percentage-red", "30%"); // New start percentage
    document.documentElement.style.setProperty(
      "--start-percentage-blue",
      "70%"
    ); // New start percentage
  }, []);

  return (
    <div className="results-container">
      <Link to="/home">
        <button className="button button-cancel">Return to Home</button>
      </Link>

      {summarizedArticles.map((summary) => (
        <div key={summary.id} className="article-summary">
          <div className="results-image-container">
            <img
              src={summary.imageUrl}
              className="results-image"
              alt={summary.title}
            />
            <div className="gradient-overlay"></div>
            <div className="text-overlay">
              <h1>{summary.title}</h1>
            </div>
          </div>

          <h2>Selected new sources summary</h2>

          <div className="bias-container">
            <div className="rating-bar"></div>
            <div className="rating-bar-labels">
              <p className="label-left">Conservative</p>
              <p className="label-right">Liberal</p>
            </div>
          </div>

          <h2>Here's an unbiased analysis</h2>
          <div className="generated-summary">{summary.summary}</div>

          <p>
            <strong>Bias:</strong> {summary.bias}
          </p>
          <p>
            <strong>Liberal Percent:</strong> {summary.liberalPercent}%
          </p>
          <p>
            <strong>Conservative Percent:</strong> {summary.conservativePercent}
            %
          </p>
          <p>
            <strong>Sources:</strong> {summary.sources.join(", ")}
          </p>
          <p>
            <strong>Summary:</strong> {summary.summary}
          </p>
        </div>
      ))}
    </div>
  );
}
