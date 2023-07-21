import React from "react";
import calsses from "./DetailsCard.module.css";

const DetailsCard = ({
  type,
  company_location,
  post_date,
  job_title,
  job_description,
  education,
  experience,
  skills,
  what_you_will_do,
}) => {
  const whatToDo = what_you_will_do.split(",");

  return (
    <div className={calsses.card}>
      <div className={calsses.head}>
        <div className={calsses.jopDetails}>
          <div className={calsses.top}>
            <span>{post_date}</span>
            <div className={calsses.ball}></div>
            <span>{type}</span>
          </div>
          <p className={calsses.title}>{job_title}</p>
          <span className={calsses.location}>{company_location}</span>
        </div>
        <button>Apply Now</button>
      </div>

      <div className={calsses.description}>{job_description}</div>

      <div className={calsses.requirements}>
        <h3>Requirements</h3>
        <ul>
          <li>{education}</li>
          <li>{experience}</li>
          <li>{skills}</li>
        </ul>
      </div>

      <div className={calsses.whatToDo}>
        <h3>What You Will Do</h3>
        <ol>
          {whatToDo.map((ele) => (
            <li key={ele}>{ele.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DetailsCard;
