import React from "react";
import classes from "./CompanyCard.module.css";

const CompanyCard = ({ img, company_name, company_website }) => {
  const linkCut = company_website.split(".");
  const link = linkCut[1] + "." + linkCut[2];
  return (
    <div className={classes.card}>
      <div className={classes.details}>
        <img src={img} alt="Company Pic" />
        <div className={classes.inner}>
          <p>{company_name}</p>
          <span>{link}</span>
        </div>
      </div>
      <a href={company_website} target="_blank">
        Company Site
      </a>
    </div>
  );
};

export default CompanyCard;
