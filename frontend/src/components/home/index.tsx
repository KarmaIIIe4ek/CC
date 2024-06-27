import React from "react";
import TopBarHomeComponent from "../top-bar_home";
import { Outlet } from "react-router-dom";


const Home = () => {

    return (
        <div>
            <TopBarHomeComponent/>
            <Outlet />
        </div>
    );
};

export default Home;
