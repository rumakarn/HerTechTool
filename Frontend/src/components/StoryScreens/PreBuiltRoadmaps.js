// PreBuiltRoadmaps.js

import React from "react";
import roadmapData from "../../assets/roadmapData"; // Assuming roadmapData is correctly structured

const PreBuiltRoadmaps = ({ domain }) => {
  const { imageUrl, resourceLinks } = roadmapData[domain] || {
    imageUrl: "",
    resourceLinks: [],
  };

  return (
    <div className="PreBuiltRoadmaps">
      <img src={imageUrl} alt={`Roadmap for ${domain}`} />
      <div className="Resource-links">
        {resourceLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PreBuiltRoadmaps;
