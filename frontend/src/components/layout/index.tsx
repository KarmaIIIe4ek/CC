import React, { useState } from "react";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import SideBarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent = ({children} : ILayout) => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true)
    const isNonMobile = useMediaQuery('(min-width:600px)')
    const location = useLocation()
    const classes = useStyles()
    return (
        location.pathname === '/user/login' || location.pathname === '/user/register' ? (
            <>{children}</>
        ) : (
            <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
                <SideBarComponent
                    isNonMobile={isNonMobile}
                    drowerWidth='250'
                    sideBarIsOpen={sideBarIsOpen}
                    setSideBarIsOpen={setSideBarIsOpen}
                />
                <Box className={classes.mainSection} >
                    <TopBarComponent setSideBarIsOpen={setSideBarIsOpen} sideBarIsOpen={sideBarIsOpen} isNonMobile={isNonMobile}/>
                    {children}
                </Box>
            </Box>
        )
    )
}

export default LayoutComponent;