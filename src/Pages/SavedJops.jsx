import React from "react";
import classes from "./SavedJops.module.css";
import JopsContainer from "../components/HomeComponents/JopsCard/JopsContainer/JopsContainer";
import data from "../jops.json";
import { useNavigate } from "react-router-dom";

const SavedJopsPage = () => {
  const localData = JSON.parse(localStorage.getItem("savedJops"));
  const navigate = useNavigate()

  const savedData = data.filter((ele) => localData.includes(ele.id));
  console.log(savedData);

  return (
    <div className={classes.page}>
      <div className={classes.content}>
        {savedData.length > 0 && <JopsContainer dataArr={savedData} />}
        {savedData.length <= 0 && (
          <div className={classes.notFound}>
            <p>You Didn't Save Any Jop Yet</p>
            <button onClick={() => navigate('/')}>Browse Available Jobs</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJopsPage;
