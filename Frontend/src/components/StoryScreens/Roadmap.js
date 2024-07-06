// Roadmap.js

import React, { useState } from "react";
import Modal from "./Modal";
import PreBuiltRoadmaps from "./PreBuiltRoadmaps";
import FlowchartCreator from "./FlowchartCreator"; // Import your FlowchartCreator component

import "../../Css/Roadmap.css";
import roadmapData from "../../assets/roadmapData"; // Assuming roadmapData is correctly structured

const Roadmap = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [showFlowchartCreator, setShowFlowchartCreator] = useState(false);

  const handleDomainSelect = (e) => {
    const domain = e.target.value;
    if (domain) {
      setSelectedDomain(domain);
      setShowModal(true);
    }
  };

  return (
    <div className="Roadmap-page">
      <div className="Roadmap-left">
        <img src="roadmap.jpg" alt="Roadmap illustration" />
      </div>
      <div className="Roadmap-right">
        <h1 className="Roadmap-header">Roadmaps</h1>
        <h2 className="Roadmap-description">
          Understanding the importance of roadmaps can help guide your learning
          and career path effectively.
        </h2>
        <div className="Roadmap-buttons">
          <button onClick={() => setShowFlowchartCreator(true)}>
            Create Own Roadmap
          </button>
          <div className="Roadmap-dropdown">
            <select onChange={handleDomainSelect} value="">
              <option value="" disabled>
                Get Domain based Roadmap
              </option>
              {Object.keys(roadmapData).map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h2 className="Roadmap-description">
          <br></br> <br></br>
          Select a domain above to view predefined roadmaps or create your own
          custom flowchart.
        </h2>
        <h2 className="Roadmap-description">
          These roadmaps are designed to assist in structuring your learning
          journey and career development, ensuring clarity and direction in your
          chosen technology domain.
        </h2>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          {selectedDomain ? (
            <PreBuiltRoadmaps domain={selectedDomain} />
          ) : (
            <div>No roadmap selected</div>
          )}
        </Modal>
        <Modal
          show={showFlowchartCreator}
          onClose={() => setShowFlowchartCreator(false)}
        >
          <FlowchartCreator onClose={() => setShowFlowchartCreator(false)} />
        </Modal>
      </div>
    </div>
  );
};

export default Roadmap;
