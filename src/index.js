import React from "react";
import ReactDOM from "react-dom/client";

//Styles Css
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Principal Container
import { EscuchamosReact } from "./container/EscuchamosReact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <EscuchamosReact />
  </>
);
