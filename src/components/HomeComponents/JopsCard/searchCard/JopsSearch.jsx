import React, { useRef, useState } from "react";
import classes from "./JopsSearch.module.css";

import { FaFilter } from "react-icons/fa";
import MobileFilters from "../../FilterCard/MobileFilters";
import { useDispatch } from "react-redux";
import { filtersAction } from "../../../../redux/Filter/filterSlice";

const JopsSearch = () => {
  const [showFilters, setShowFilters] = useState(false)
  const inpRef = useRef()
  const dispatch = useDispatch()
  // console.log(inpRef)

  function filterMenuHandler() {
    setShowFilters(true)
  }
  function closeHandler() {
    setShowFilters(false)
  }


  function searchHandler() {
    dispatch(filtersAction.setSearch(inpRef.current.value))
  }

  return (
    <div className={classes.searchCard}>
      {showFilters && <MobileFilters close={closeHandler} />}
      <h3>Search Jop</h3>
      <div className={classes.searchField}>
        <input ref={inpRef} type="text" placeholder="Jop Title" />
        <div onClick={filterMenuHandler} className={classes.icon}>
        <FaFilter />
        </div>
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default JopsSearch;
