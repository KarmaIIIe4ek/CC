import React, { FC, useState } from "react";
import TopBarComponent from "../top-bar";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import SideBarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent: FC = (): JSX.Element => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true)
    const isNonMobile = useMediaQuery('(min-width:760px)')
    const location = useLocation()
    const classes = useStyles()
    return (
        location.pathname === '/user/login' || location.pathname === '/user/register' || location.pathname === '/' ? (
            <><Outlet /></>
        ) : (
            <Box display={isNonMobile ? 'flex' : 'block'} justifyContent='space-between' width='100%' height='100%'>
                <SideBarComponent
                    isNonMobile={isNonMobile}
                    drawerWidth='250px'
                    sideBarIsOpen={sideBarIsOpen}
                    setSideBarIsOpen={setSideBarIsOpen}
                />
                <Box className={classes.mainSection} width={`${`calc(100% - ${isNonMobile && sideBarIsOpen ? '250px' : '0px'})`}`} >
                    <TopBarComponent setSideBarIsOpen={setSideBarIsOpen} sideBarIsOpen={sideBarIsOpen} isNonMobile={isNonMobile}/>
                    <Outlet />
                </Box>
            </Box>
        )
    )
}

export default LayoutComponent;