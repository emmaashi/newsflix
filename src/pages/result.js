import React, { useEffect } from "react";
import "../styles/results.css";
import summarizedArticles from "../data/summarizedData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ResultsPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--start-percentage-red", "30%");
    document.documentElement.style.setProperty(
      "--start-percentage-blue",
      "70%"
    );
  }, []);
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      <h1>Generated Article Summary</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
