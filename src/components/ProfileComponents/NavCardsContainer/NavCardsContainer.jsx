import React from "react";
import classes from "./NavCardsContainer.module.css";

import { NavCard } from "./NavCard/NavCard";

const NavCardsContainer = () => {
  return (
    <div className={classes.container}>
      <NavCard
        title="Account Settings"
        des="Details about your personal information"
      />
      <NavCard
        title="Membership Plan"
        des="Details about your personal information"
      />
      <NavCard
        title="Password & Security"
        des="Details about your personal information"
      />
    </div>
  );
};

export default NavCardsContainer;
