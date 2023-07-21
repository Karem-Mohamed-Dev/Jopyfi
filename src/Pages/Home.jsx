import React from "react";
import classes from "./Home.module.css";

import UserCard from "../components/HomeComponents/UserCard/UserCard";
import JopsCard from "../components/HomeComponents/JopsCard/JopsCard";
import FiltersContainer from "../components/HomeComponents/FilterCard/FiltersContainer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveActions } from "../redux/SaveJop/saveSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filter.data);

  useEffect(() => {
    const oldData = localStorage.getItem("savedJops");
    if (oldData) {
      dispatch(saveActions.reCreateJops(JSON.parse(oldData)));
    }
  }, [dispatch]);

  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <div className={classes.left}>
          <UserCard />
        </div>
        <div className={classes.jops}>
          <JopsCard dataArr={data} />
        </div>
        <div className={classes.filters}>
          <FiltersContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
