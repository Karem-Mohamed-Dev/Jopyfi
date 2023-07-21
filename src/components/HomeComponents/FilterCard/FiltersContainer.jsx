import React from "react";
import classes from "./FiltersContainer.module.css";

import CompanyFilter from "./CompanyFilter";
import TypeFilter from "./TypeFilter";
import SpecialityFilter from "./SpecialityFilter";
import LocationFilter from "./LocationFilter";
import data from "../../../jops.json";

import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { filtersAction } from "../../../redux/Filter/filterSlice";

const FiltersContainer = ({ className, close }) => {
  const classMix = `${classes.container} ${className}`;
  const dispatch = useDispatch();

  const companysArr = [...new Set(data.map((ele) => ele.company_name))].sort();
  const specializationArr = [
    ...new Set(data.map((ele) => ele.category)),
  ].sort();
  const locationsArr = [
    ...new Set(data.map((ele) => ele.company_location)),
  ].sort();
  const typeArr = [...new Set(data.map((ele) => ele.work_details.type))].sort();

  return (
    <div className={classMix}>
      <div className={classes.head}>
        <p>Jop Filter</p>
        <GrClose style={{ cursor: "pointer" }} onClick={close} />
      </div>
      <CompanyFilter innerData={companysArr} />
      <div className={classes.line}></div>
      <TypeFilter innerData={typeArr} />
      <div className={classes.line}></div>
      <SpecialityFilter innerData={specializationArr} />
      <div className={classes.line}></div>
      <LocationFilter innerData={locationsArr} />
      <button
        onClick={() => dispatch(filtersAction.applyFilters())}
        className={classes.applybtn}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FiltersContainer;
