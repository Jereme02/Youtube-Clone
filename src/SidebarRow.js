import React from "react";
import "./SidebarRow.css";
import HomeIcon from "@material-ui/icons/Home";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h1 className="sidebarRow__title">{title}</h1>
    </div>
  );
}

export default SidebarRow;
