import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";


const ServicesComponent = () => {

    const classes = useStyles()
    return (
        <div>
            <Typography variant="h2" className={classes.root}>Здесь должен быть какой-то текст про услуги!</Typography>
        </div>
    );
};

export default ServicesComponent;