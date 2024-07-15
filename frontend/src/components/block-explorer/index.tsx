import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";


const BlockExplorerPageComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h2" className={classes.root}>Здесь должны быть данные с Блок-експлорера!</Typography>
        </div>
    );
};

export default BlockExplorerPageComponent;