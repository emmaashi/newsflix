// import React from "react";
// import "../styles/generatedData.css";


// function GeneratedData() {
  
//     return (
      
//       <section>
     
//         {summarizedArticles.map(summary => (
          
//           <div key={summary.id} className="article-summary">

//             <div className="article-cover-image">
//               <img src={summary.imageUrl} alt={summary.title}/>
//             </div>
            
//             <h1>{summary.title}</h1>

//             <h1 className="article-title-preview">{summary.title}</h1>

//             <h2>Selected new sources summary</h2>

//             <div className="bias-container">
//                 <div className="rating-bar">
//                   <div className="rating-bar-labels">
//                       <p>Conservative</p>
//                       <p>Liberal</p>
//                   </div>
//                 </div>
//             </div>

//             <h2>Heres an unbiased analysis</h2>
//             <div className="generated-summary">{summary.summary}</div>
                    
//               <p><strong>Bias:</strong> {summary.bias}</p>
//               <p><strong>Liberal Percent:</strong> {summary.liberalPercent}%</p>
//               <p><strong>Conservative Percent:</strong> {summary.conservativePercent}%</p>
//               <p><strong>Sources:</strong> {summary.sources.join(', ')}</p>
//               <p><strong>Summary:</strong> {summary.summary}</p>

//           </div>
//         ))}

       

//       </section>
//     );
//   }
  
//   export default GeneratedData;
  