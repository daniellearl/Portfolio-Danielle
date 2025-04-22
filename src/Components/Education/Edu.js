import React, { useState } from "react";
import "./Edu.css";
import "../../App.css";

const data = [
  {
    company: "Honest Chocolat",
    location: "Commercial Bay",
    year: "2023–2024",
    role: "Sales Assistant",
    duties: [
      "Recommended and upsold products",
      "Made quality drinks and processed orders quickly",
      "Completed cleaning tasks according to standards",
      "Handled customer complaints professionally",
      "Packed and prepared orders for hotel, company, and online orders",
    ],
  },
  {
    company: "Mainsail Bar and Bristo",
    location: "Gulf Harbour",
    year: "2022–2022",
    role: "Front of House",
    duties: [
      "Served guests in a busy 30+ table bar and restaurant",
      "Handled bookings and takeaway orders via phone",
      "Delivered food and beverages and packed takeaways",
      "Engaged with customers to enhance their experience",
      "Resolved complaints promptly and professionally",
    ],
  },
  {
    company: "Bombay to Goa",
    location: "Gulf Harbour",
    year: "2022–2022",
    role: "Front of House",
    duties: [
      "Supported team during peak hours to ensure a smooth service",
      "Promoted meals and drinks to enhance customer experience",
      "Explained specials, took orders, and answered guest questions",
      "Offered tailored recommendations",
    ],
  },
];

const Edu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="education" className="edu">
      <div className="title">
        <h1>
          EDUCATION AND <br />
          EXPERIENCE
        </h1>
      </div>

      <div className="exp-edu-wrapper">
        {/* EXPERIENCE */}
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
                  {item.company}
                </div>
              ))}
            </div>
            <div className="exp-description">
              <div className="job-description">
                <h1>
                  {data[selected].company}, <br /> {data[selected].location}
                </h1>
                <h2>{data[selected].year}</h2>
                <h3>{data[selected].role}</h3>
                <ul>
                  {data[selected].duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
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
    </section>
  );
};

export default Edu;
