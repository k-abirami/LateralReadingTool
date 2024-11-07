import React from 'react';
import './ArticleDisplay.css';

const ArticleDisplay = ({ title, content }) => {
  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <div className="article-content">
        {content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleDisplay;
