import React from "react";

import JopCard from "./JopCard/JopCard";
import { useSelector } from "react-redux";

const JopsContainer = ({ dataArr }) => {
  return (
    <>
      {dataArr.length > 0 &&
        dataArr.map((ele) => (
          <JopCard
            id={ele.id}
            key={ele.id}
            category={ele.category}
            img={ele.company_logo}
            company_name={ele.company_name}
            job_description={ele.job_description}
            job_title={ele.job_title}
            salary={ele.salary}
            type={ele.work_details.type}
            work_location={ele.work_details.work_location}
          />
        ))}
      {dataArr.length <= 0 && (
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            backgroundColor: "#fff",
            padding: '20px',
            boxShadow: '0 0 8px 0 #dfdfdf',
            borderRadius: '4px'
          }}
        >
          No Jops Found
        </p>
      )}
    </>
  );
};

export default JopsContainer;
