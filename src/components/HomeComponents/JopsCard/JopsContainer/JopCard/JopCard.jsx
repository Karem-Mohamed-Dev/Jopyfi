import React, { useEffect } from "react";
import classes from "./JopCard.module.css";

import { BiDollar } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveActions } from "../../../../../redux/SaveJop/saveSlice";

const JopCard = ({
  id,
  category,
  img,
  company_name,
  job_description,
  job_title,
  salary,
  type,
  work_location,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("savedJops");
    if (localData) {
      const data = JSON.parse(localData);
      for (let i = 0; i < data.length; i++) {
        if (data[i] === id) {
          setIsSaved(true);
          return;
        }
      }
    }
  }, [id]);

  function saveHandler() {
    setIsSaved(true);
    dispatch(saveActions.addJop(id));
    addToLocalStorage();
  }

  function removeHandler() {
    setIsSaved(false);
    dispatch(saveActions.removeJop(id));
    removeFromLocalStorage();
  }

  function addToLocalStorage() {
    const oldData = localStorage.getItem("savedJops");
    if (oldData) {
      const data = JSON.parse(oldData);
      console.log(data);
      if (!data.includes(id)) {
        localStorage.setItem("savedJops", JSON.stringify([...data, id]));
      }
    } else {
      localStorage.setItem("savedJops", JSON.stringify([id]));
    }
  }

  function removeFromLocalStorage() {
    const oldData = localStorage.getItem("savedJops");
    if (oldData) {
      const data = JSON.parse(oldData).filter((ele) => ele !== id);
      console.log(data);
      localStorage.setItem("savedJops", JSON.stringify([...data]));
    }
  }

  return (
    <div id={id} category={category} className={classes.jopCard}>
      <div className={classes.head}>
        <div className={classes.jopDetails}>
          <img src={img} alt="" />
          <div className={classes.info}>
            <p>{job_title}</p>
            <span>{company_name}</span>
          </div>
        </div>
        <div
          onClick={isSaved ? removeHandler : saveHandler}
          style={{
            backgroundColor: isSaved ? "#2c2ce4" : "#e4e3ff",
            color: isSaved ? "#fff" : "#2c2ce4",
          }}
          className={classes.saveJop}
        >
          {!isSaved && (
            <>
              <p>Save Jop</p>
              <BsBookmark />
            </>
          )}
          {isSaved && (
            <>
              <p>Saved</p>
              <BsFillBookmarkFill />
            </>
          )}
        </div>
      </div>
      <div className={classes.center}>
        <p>{job_description}</p>
        <div className={classes.tags}>
          <span className={classes.tag}>{type}</span>
          <span className={classes.tag}>{category}</span>
          <span className={classes.tag}>{work_location}</span>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.salary}>
          <div className={classes.icon}>
            <BiDollar />
          </div>
          <p>{salary}</p>
        </div>
        <Link to={`/application/${id}`}>Apply Now</Link>
      </div>
    </div>
  );
};

export default JopCard;
