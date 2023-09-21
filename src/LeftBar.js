import React from "react";
import "./LeftBar.css";
import LeftBarRow from "./LeftBarRow";
import BarChartIcon from "@material-ui/icons/BarChart";
import PeopleIcon from "@material-ui/icons/People";
import MessagesIcon from "@material-ui/icons/Message";
import LayersIcon from "@material-ui/icons/Layers";
import SettingsIcon from "@material-ui/icons/Settings";
import LockIcon from "@material-ui/icons/Lock";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";


const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="left_header">
        <img src="/Images/Leftbar1.jpeg" alt="header" />
        <h3>RESLINK</h3>
      </div>
      <div className="left_middle">
        <LeftBarRow Icon={BarChartIcon} title="Dashboard" index='true' />
        <LeftBarRow Icon={LayersIcon} title="Projects" />
        <LeftBarRow Icon={PeopleIcon} title="Staffing" />
        <LeftBarRow Icon={MessagesIcon} title="Messages" />
      </div>
      <div className="left_footer">
        <LeftBarRow Icon={BarChartIcon} title="Support" />
        <LeftBarRow Icon={SettingsIcon} title="Settings" />
        <hr/>
        <div className="left_footer2">
             <Avatar alt="avatar" src="/Images/avatar1.jpg"/>
            <div className="left_footer2_content">
                <h4>Olivia Rhye</h4>
                <p>olivia@untitledui.com</p>
            </div>
            <LogoutIcon/>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
