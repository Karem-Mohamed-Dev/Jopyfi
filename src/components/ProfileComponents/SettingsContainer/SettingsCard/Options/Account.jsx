import React from "react";
import classes from "./Account.module.css";
import Input from "../../../../UI/Input/Input";

const Account = () => {
  return (
    <>
      <h3>Change User Information here</h3>
      <div className={classes.inputsFeild}>
        <div className={classes.group}>
          <Input label="Full Name*" type="text" />
          <Input label="Email Address*" type="email" />
        </div>

        <Input label="Address*" type="text" />

        <div className={classes.group}>
          <Input label="City" type="text" />
          <Input label="State/Province" type="text" />
        </div>
        <div className={classes.group}>
          <Input label="Zip Code" type="text" />
          <Input label="Country" type="text" />
        </div>
      </div>
      <button className={classes.updateBtn}>Update Information</button>
    </>
  );
};

export default Account;
