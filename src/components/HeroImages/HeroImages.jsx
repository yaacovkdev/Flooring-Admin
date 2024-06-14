import React from "react";
import "./HeroImages.scss";
import axios from "axios";

const HeroImages = ({ heroImagesData }) => {
  console.log(heroImagesData);
  return (
    <div className="edit-section">
      <h2>Hero Images</h2>
      <div className="hero-images-grid">

        {heroImagesData.map((image, index) => (
          <div key={index} className="hero-image-row">
            <input type="checkbox" className="checkbox"/>
            <div className="hero-image-content">
              <img width={280} src={`${process.env.REACT_APP_API_URL}/admin/image/${image.image_id}`} alt={image.file_name} className="hero-image" />
              <div className="hero-image-details">
                <p><strong>Title:</strong> {image.file_name}</p>
                <p><strong>Caption HTML:</strong> <input type="text" value={image.body}/></p>
                <p><strong>Created:</strong> {image.created_at}</p>
                <p><strong>Updated:</strong> {image.updated_at}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImages;
