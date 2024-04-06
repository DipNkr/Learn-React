 import React from "react";
 import ReactDOM from "react-dom";

let element1 = React.createElement("h1", {}, "From App.js h1");

let element2 = React.createElement("h2",{}, "From App.js h2");

let div = React.createElement("div", {},[element1, element2]);

ReactDOM.render(div, document.getElementById("root"));