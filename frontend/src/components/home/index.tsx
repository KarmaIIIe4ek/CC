import React, {useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets } from "../../store/thunks/assets";
import { useMediaQuery } from "@mui/material";
import TopBarHomeComponent from "../top-bar_home";
import { Outlet } from "react-router-dom";


const Home = () => {

    const {favoriteAssets} = useAppSelector(state => state.assets)
    const dispatch = useAppDispatch()
    console.log('Assets: ', favoriteAssets)
    useEffect(() => {
        dispatch(getFavoriteAssets('bitcoin'))
    }, [])

    return (
        <div>
            <TopBarHomeComponent/>
            <Outlet />
        </div>
    );
};

export default Home;
