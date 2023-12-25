import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="page">

        <Outlet></Outlet>

       
      </div>
    </div>
  );
}
