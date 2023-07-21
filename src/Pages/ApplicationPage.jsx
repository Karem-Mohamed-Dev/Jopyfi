import React from "react";
import classes from "./ApplicationPage.module.css";
import CompanyCard from "../components/ApplicationComponents/CompanyCard/CompanyCard";
import DetailsCard from "../components/ApplicationComponents/DetailsCard/DetailsCard";

import data from "../jops.json";
import { useLoaderData, useParams } from "react-router-dom";

const ApplicationPage = () => {
  const holeData = useLoaderData();
  const param = useParams();
  const appData = holeData.filter((ele) => ele.id === Number(param.id))[0];
  console.log(appData);
  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <CompanyCard
          img={appData.company_logo}
          company_name={appData.company_name}
          company_website={appData.company_website}
        />
        <DetailsCard
          type={appData.work_details.type}
          company_location={appData.company_location}
          post_date={appData.post_date}
          job_title={appData.job_title}
          job_description={appData.job_description}
          education={appData.details.requirements.education}
          experience={appData.details.requirements.experience}
          skills={appData.details.requirements.skills}
          what_you_will_do={appData.details.what_you_will_do}
        />
      </div>
    </div>
  );
};

export default ApplicationPage;

export async function loader() {
  return data;
}
