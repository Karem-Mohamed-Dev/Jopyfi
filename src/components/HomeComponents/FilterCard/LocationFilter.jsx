import React from "react";
import classes from "./FilterCard.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtersAction } from "../../../redux/Filter/filterSlice";

const LocationFilter = ({ innerData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dataArr, setDataArr] = useState([]);
  const dispatch = useDispatch();

  function filterHandler(event) {
    const inpValue = event.target.name;
    if (dataArr.includes(inpValue)) {
      const newData = dataArr.filter((ele) => ele !== inpValue);
      setDataArr(newData);
      dispatch(filtersAction.setlocation(newData));
    } else {
      setDataArr((state) => [...state, inpValue]);
      dispatch(filtersAction.setlocation([...dataArr, inpValue]));
    }
  }
  return (
    <div className={classes.filterCard}>
      <div
        onClick={() => setShowMenu((state) => (state = !state))}
        className={classes.head}
      >
        <h3>Locations</h3>
        <RiArrowDownSLine
          style={{ transform: showMenu ? "rotate(-180deg)" : "rotate(0deg)" }}
        />
      </div>
      <ul style={{ display: showMenu ? "block" : "none" }}>
        {innerData.map((ele) => (
          <li key={ele}>
            <label>
              <input onChange={filterHandler} name={ele} type="checkbox" />
              {ele}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationFilter;
