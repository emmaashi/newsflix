import React from "react";
import { useLocation } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Generated Article Summary</h1>
      <h2>Title: {data.article_title}</h2>
      <h3>Bias: {data.bias}%</h3>
      <h3>News Source: {data.news_source.join(", ")}</h3>
      <h3>Rewritten Version:</h3>
      <p>{data.rewritten_version}</p>
    </div>
  );
}
