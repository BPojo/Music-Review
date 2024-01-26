import React from 'react';
import '../App.css';

const AlbumCard = ({ title, imageUrl, description, reviewUrl }) => {
  return (
    <div className="album-card">
      <img src={imageUrl} alt={`Cover for ${title}`} className="album-image" />
      <div className="album-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {reviewUrl && (
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="review-button">
            Read Review
          </a>
        )}
      </div>
    </div>
  );
};

export default AlbumCard;
