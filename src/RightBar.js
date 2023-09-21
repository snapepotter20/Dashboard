import React, { useState } from "react";
import "./RightBar.css";
import { RightBarMiddle } from "./RightBarMiddle";
import { content1 } from "./RightBar_box1_content";
import { content2 } from "./RightBar_box2_content";
import SearchIcon from "@material-ui/icons/Search";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";

const RightBar = () => {
  const [inputSearch, setInputSearch] = useState(" ");
  return (
    <div className="rightBar">
      <div className="rightBar_header">
        <div className="rightBar_search">
          <SearchIcon className="rightBar_inputbutton" />
          <input
            onChange={(e) => setInputSearch(inputSearch+1)}
            value={inputSearch}
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="rightBar_icon">
          <NotificationsOutlinedIcon />
          <button>+ CREATE NEW PROJECT</button>
        </div>
      </div>
      <div className="rightBar_middle">
        <div className="rightBar_middle_heading">
          <h1>Welcome back,Olivia</h1>
          <p>Track , manage researches and submissions.</p>
        </div>
        <div className="rightBar_middle_boxes">
          {RightBarMiddle.map((item) => (
            <div className="rightBar_middle_box">
              <div>
                <h1>{item.heading}</h1>
                <p>{item.text}</p>
              </div>
              <div className="rightBar_middle_box_icon">{item.Icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rightBar_footer">
        <div className="rightBar_footer_box1">
          <div className="rightBar_footer_box1_header">
            <h2>Posted Projects</h2>
            <p>See All</p>
          </div>
          <hr />
          <div className="rightBar_footer_box1_content">
            {content1.map((item) => (
              <div className="box1_content_div">
                <p>{item.heading}</p>
                <ul>
                  <li></li>
                </ul>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rightBar_footer_box2">
          <div className="rightBar_footer_box2_header">
            <h2>Recent Activities</h2>
          </div>
          <hr />
          <div className="rightBar_footer_box2_content">
            {content2.map((item) => (
              <div className="box2_content_div">
                <ul>
                  <li></li>
                </ul>
                <p>{item.text}</p>
                <p>{item.heading}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <hr />
        <p>
          Copyright &copy; {new Date().getFullYear()}. Reslink . All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default RightBar;
