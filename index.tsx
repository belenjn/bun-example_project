import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = hydrateRoot(container, <App/>);
