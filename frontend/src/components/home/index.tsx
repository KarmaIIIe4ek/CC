import React, {useState, useEffect} from "react";
import { useAppDispatch } from "../../utils/hook";
import { getFavoriteAssets } from "../../store/thunks/assets";


const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getFavoriteAssets('bitcoin'))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Home;
