import React from "react";
import "./../../Css/Tools.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-button" onClick={toggleAccordion}>
        {title}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const SubAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSubAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sub-accordion-item">
      <button className="sub-accordion-button" onClick={toggleSubAccordion}>
        {title}
      </button>
      {isOpen && <div className="sub-accordion-content">{children}</div>}
    </div>
  );
};

const QuestionnaireAccordion = () => {
  return (
    <Accordion title="Questionnaire">
      <SubAccordion title="What is HerTechTool?">
        <p>
          HerTechTool is a vibrant community dedicated to empowering women in
          the technology industry. We provide resources, support, and networking
          opportunities to help women advance their careers in tech.
        </p>
      </SubAccordion>
      <SubAccordion title="Who can join HerTechTool?">
        <p>
          HerTechTool welcomes women from all backgrounds who are involved or
          interested in the technology industry.
        </p>
      </SubAccordion>
      <SubAccordion title="What resources does HerTechTool offer?">
        <p>
          We offer access to events, workshops, job opportunities, mentorship
          programs, and networking sessions tailored for women in tech.
        </p>
      </SubAccordion>
      <SubAccordion title="How can I get involved in HerTechTool?">
        <p>
          You can join our community by participating in events, contributing
          your expertise, sharing your experiences, or becoming a mentor.
        </p>
      </SubAccordion>
      <SubAccordion title="How does HerTechTool promote diversity?">
        <p>
          We collaborate with companies committed to diversity, share job
          openings from inclusive organizations, and highlight success stories
          of women in tech.
        </p>
      </SubAccordion>
      <SubAccordion title="Where can I find more information about HerTechTool?">
        <p>
          Visit our website or follow us on social media to stay updated on
          events, news, and initiatives.
        </p>
      </SubAccordion>
    </Accordion>
  );
};

const Tools = () => {
  const spreadsheetUrl = process.env.PUBLIC_URL + "/opportunity.xlsx";

  const handleExploreClick = () => {
    window.open(spreadsheetUrl, "_blank");
  };

  return (
    <div className="Inclusive-addStory-page">
      <h1>Welcome to HerTechTool</h1>
      <img src="women.jpg" alt="HerTechTool Community" />
      <p>
        HerTechTool is a vibrant community dedicated to empowering women in the
        technology industry. We strive to provide resources, support, and
        networking opportunities to help women advance their careers in tech.
        Our community offers information about women-centric events, company
        openings, and various initiatives aimed at fostering an inclusive
        environment.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to create a supportive space where women in technology
        can thrive. We aim to:
      </p>
      <ul>
        <li>
          Provide access to events and workshops tailored for women in tech
        </li>
        <li>Share job opportunities at companies committed to diversity</li>
        <li>Facilitate mentorship and networking opportunities</li>
        <li>Promote success stories of women in tech</li>
      </ul>

      <h2>Upcoming Events</h2>
      <img src="events.jpg" alt="Empowering Women" />
      <p>
        Stay tuned for our upcoming events, including workshops, hackathons, and
        networking sessions. These events are designed to help you build your
        skills, connect with industry leaders, and advance your career.
      </p>

      <h2>Join Us</h2>
      <img src="hackathon.jpg" alt="Tech Events" />
      <p>
        Become a part of HerTechTool and take advantage of the resources and
        support we offer. Whether you are a student, a professional, or an
        organization, there is a place for you in our community.
      </p>

      <QuestionnaireAccordion />

      <button className="addStory-btn" onClick={handleExploreClick}>
        Explore More Opportunities
      </button>
    </div>
  );
};

export default Tools;
