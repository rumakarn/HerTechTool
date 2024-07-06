import React from "react";
import "../../Css/FlowchartCreator.css";

const FlowchartCreator = () => {
  return (
    <div className="flowchart-creator">
      <h2>Create Your Roadmap</h2>
      <p className="intro-text">
        Roadmaps are essential for planning and visualizing your goals. They
        provide clarity and direction, helping you achieve milestones
        effectively.
      </p>
      <div className="options">
        <div className="option">
          <div className="option-content">
            <h3>Vision Roadmap</h3>
            <p>Create a roadmap to visualize your long-term vision.</p>
          </div>
        </div>
        <div className="option">
          <div className="option-content">
            <h3>Strategy Roadmap</h3>
            <p>Plan your strategy and steps to achieve your objectives.</p>
          </div>
        </div>
        <div className="option">
          <div className="option-content">
            <h3>Process Roadmap</h3>
            <p>Visualize and streamline your processes for efficiency.</p>
          </div>
        </div>
      </div>
      <a
        href="https://www.microsoft.com/en-in/microsoft-365/visio/flowchart-software"
        target="_blank"
        rel="noopener noreferrer"
        className="create-roadmap-button"
      >
        Create Your Own Roadmap
      </a>
    </div>
  );
};

export default FlowchartCreator;
