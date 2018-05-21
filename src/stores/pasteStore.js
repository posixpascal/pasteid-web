import { createStore } from "redux";
import pasteReducer from "./pasteReducer";

export default createStore(pasteReducer);