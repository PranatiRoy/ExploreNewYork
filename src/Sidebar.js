import React from "react";
import './App.css';
import ColoredMenuItem from "./ColoredMenuItem";
import {SidebarMenu} from './SidebarMenu';
function Sidebar(){
    return(
        <div className="Sidebar">
            <ColoredMenuItem content="Explore" variant="orange"/>
            <ul className="SidebarMenuList">
                {SidebarMenu.map((val,key)=>{
                    return(
                    <li key={key} className="row" onClick={()=>{window.location.pathname=val.link}}>
                        <div className="MenuItem">{val.title}</div>
                    </li>)
                })}
            </ul>
            <ColoredMenuItem  content="Learn More" />
        </div>
    )

}

export default Sidebar