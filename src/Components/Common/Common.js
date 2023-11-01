
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import Navbar from "./Navbar";
import { useState } from "react";

function Common({children}) {

  const [inactive,setInactive] = useState(false);


  return (
    <div className="app">
      <div id="layout-wrapper">
        <Navbar inactive={inactive} setInactive={setInactive}/>
        <LeftSideBar inactive={inactive} setInactive={setInactive}/>
        {children}
        {<Outlet/>}
      </div>
    </div>
  );
}

export default Common;