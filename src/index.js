import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { FwAvatarC as FwAvatar, FwAvatarGroupC as FwAvatarGroup, TestView } from "./views/test_component";

let uesrs = [
  { name: "Dinesh", company: "Mistk" },
  { name: "Dinesh", company: "PiedPiper" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FwAvatar type="initials" name="Hemant Lakhotia" />
    <FwAvatarGroup
      items={uesrs}
      nameAttribute={"name"}
      secondaryAtrribute={"company"}
      itemClicked = { (e) => console.log("Clicked")}
    />
    <TestView itemClicked={() => console.log("Clicked") }/>
    <test-view/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
