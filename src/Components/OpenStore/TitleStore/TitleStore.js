import { Fragment } from "react";
import classes from "./TitleStore.module.css";

function TitleStore() {
  return (
    <Fragment>
      <div className={classes.topTitle}>
        <p>Home</p>
        <span>/</span>
        <p>Best Sellers</p>
      </div>
      <h1>Men's Best Sellers</h1>
    </Fragment>
  );
}

export default TitleStore;
