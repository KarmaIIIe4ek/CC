import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";


const AboutComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h2" className={classes.root}>Здесь должен быть какой-то текст о нас!</Typography>
        </div>
    );
};

export default AboutComponent;