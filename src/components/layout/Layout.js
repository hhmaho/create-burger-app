import React from "react";
import classes from "./Layout.css";
import Toolbar from "../navigation/toolbar/Toolbar"

const layout = props => (
  <div>
    <Toolbar/>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default layout;
