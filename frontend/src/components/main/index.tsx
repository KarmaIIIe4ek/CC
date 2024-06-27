import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets } from "../../store/thunks/assets";
import { useStyles } from "./styles";


const MainComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h2" className={classes.root}>Здесь должен быть какой-то текст главной страницы!</Typography>
        </div>
    );
};

export default MainComponent;