import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileFilters.module.css";
import FiltersContainer from "./FiltersContainer";

function BackDrop({ close }) {
  return (
    <div className={classes.container}>
      <div onClick={close} className={classes.backdrop}></div>
      <FiltersContainer close={close} className={classes.filter} />
    </div>
  );
}

function MobileFilters({ close }) {
  return ReactDOM.createPortal(
    <BackDrop close={close} />,
    document.getElementById("root-portal")
  );
}

export default MobileFilters;
