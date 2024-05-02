import { Box, Grid, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { ColorModeContext, tokens } from "../../theme";
import { useStyles } from "./styles";
import { MenuOutlined } from "@mui/icons-material";

const TopBarComponent = (props: any) => {
    const { setSideBarIsOpen, sideBarIsOpen, isNonMobile } = props
    const user = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <MenuOutlined
                className={classes.menuIcon}
                onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
                />
                <Grid>Welcome  {user ? `${user.email}` : ''}</Grid>
                <Box display='flex'>
                    <IconButton sx={{mr: '15px'}}>
                        <NotificationsNoneIcon/>
                    </IconButton>
                    <Grid onClick={colorMode.toggleColorMode} sx={{pr: '20px'}}>
                        <IconButton className={classes.themeIcon}>
                            {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                        </IconButton>
                        

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default TopBarComponent