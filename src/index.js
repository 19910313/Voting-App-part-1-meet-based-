import React from "react";
import ReactDOM from "react-dom/client";
import VoteComponent from "./VoteComponent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VoteComponent question="Do you like React?" options={["Yes", "No"]} />
    <VoteComponent
      question="Do you like Angular?"
      options={["Yes", "No", "Very much"]}
    />
  </React.StrictMode>
);
console.log(root);
reportWebVitals();
