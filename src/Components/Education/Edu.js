import React, { useState } from "react";
import "./Edu.css";
import "../../App.css";

const data = [
  {
    title: "Honest Chocolat",
    description: (
      <div className="job-description">
        <h1>
          Honest Chocolat, <br /> Commercial Bay
        </h1>
        <h2>2023–2024</h2>
        <h3>Sales Assistant</h3>
        <ul>
          <li>Recommended and upsold products</li>
          <li>Made quality drinks and processed orders quickly</li>
          <li>Completed cleaning tasks according to standards</li>
          <li>Handled customer complaints professionally</li>
          <li>
            Packed and prepared orders for hotel, company, and online orders
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Mainsail Bar and Bristo",
    description: (
      <div className="job-description">
        <h1>
          Mainsail Bar and Bristo, <br /> Gulf Harbour
        </h1>
        <h2>2022–2022</h2>
        <h3>Front of House</h3>
        <ul>
          <li>Served guests in a busy 30+ table bar and restaurant</li>
          <li>Handled bookings and takeaway orders via phone</li>
          <li>Delivered food and beverages and packed takeaways</li>
          <li>Engaged with customers to enhance their experience</li>
          <li>Resolved complaints promptly and professionally</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Bombay to Goa",
    description: (
      <div className="job-description">
        <h1>
          Bombay to Goa, <br /> Gulf Harbour
        </h1>
        <h2>2022–2022</h2>
        <h3>Front of House</h3>
        <ul>
          <li>Supported team during peak hours to ensure a smooth service</li>
          <li>Promoted meals and drinks to enhance customer experience</li>
          <li>Explained specials, took orders, and answered guest questions</li>
          <li>Offered tailored recommendations</li>
        </ul>
      </div>
    ),
  },
];

const Edu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="edu">
      <div className="title">
        <h1>
          EDUCATION AND <br />
          EXPERIENCE
        </h1>
      </div>

      <div className="exp-edu-wrapper">
        {/*EXPERIENCE*/}
        <div className="experience">
          <div className="title-exp">
            <h1>Experience</h1>
          </div>
          <div className="exp-box">
            <div className="exp-titles">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`exp-title ${selected === index ? "active" : ""}`}
                  onClick={() => setSelected(index)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="exp-description">
              <p>{data[selected].description}</p>
            </div>
          </div>
        </div>

        {/*EDUCATION*/}
        <div className="education">
          <div className="edu-title">
            <h1>Education</h1>
          </div>

          <div className="edu-entry">
            <h1>
              St Marys College, <br /> Ponsonby
            </h1>
            <h3>2016–2022</h3>
            <div className="edu-list">
              <li>Academic Representative - Computer Science (2022)</li>
              <li>Peer Support Leader (2022)</li>
              <li>Filipino Group Leader (2021)</li>
            </div>
          </div>

          <div className="edu-entry">
            <h1>
              Auckland University of Technology, <br /> City Campus
            </h1>
            <h3>2023–2026</h3>
            <div className="edu-list">
              <li>AUT Student Ambassador (2024–2025)</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;
