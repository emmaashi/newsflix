import React from "react";
import "../styles/results.css";
import { useEffect } from "react";
import summarizedArticles from "../data/summarizedData";
import GeneratedData from "../components/GeneratedData";


export default function Results() {
    
    useEffect(() => {
        document.documentElement.style.setProperty('--start-percentage-red', '30%'); // New start percentage
        document.documentElement.style.setProperty('--start-percentage-blue', '70%'); // New start percentage
      }, []);

    return (
        <>
        <div className="results-container">
            {summarizedArticles.map(summary => (
            
            <div key={summary.id} className="article-summary">

                <div className="article-cover-image">
                    <img src={summary.imageUrl} alt={summary.title}/>
                </div>
                
                <h1>{summary.title}</h1>

                <h2>Selected new sources summary</h2>

                <div className="bias-container">
                    <div className="rating-bar"> </div>
                    <div className="rating-bar-labels">
                        <p className="label-left">Conservative</p>
                        <p className="label-left">Liberal</p>
                    </div>
                </div>

                <h2>Heres an unbiased analysis</h2>
                <div className="generated-summary">{summary.summary}</div>
                        
                <p><strong>Bias:</strong> {summary.bias}</p>
                <p><strong>Liberal Percent:</strong> {summary.liberalPercent}%</p>
                <p><strong>Conservative Percent:</strong> {summary.conservativePercent}%</p>
                <p><strong>Sources:</strong> {summary.sources.join(', ')}</p>
                <p><strong>Summary:</strong> {summary.summary}</p>

            </div>
            ))}

        </div>
        </>
    );
}

