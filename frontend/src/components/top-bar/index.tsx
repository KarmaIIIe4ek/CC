import { AppBar, Grid, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import React, { FC, useContext } from "react";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { ColorModeContext } from "../../theme";
import { useStyles } from "./styles";
import { MenuOutlined } from "@mui/icons-material";
import FlexBetween from "../flex-between";
import { ITopBarProps } from "../../common/types/topbar";

const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const { setSideBarIsOpen, sideBarIsOpen, isNonMobile } = props
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
            <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            {!sideBarIsOpen ? <MenuOutlined
                            className={classes.menuIcon}
                            onClick={() => setSideBarIsOpen(!sideBarIsOpen)}/> : <></>}
                            <Typography>
                                {sessionStorage.getItem('email') ? `${sessionStorage.getItem('email')}` : ''}
                            </Typography>
                        </FlexBetween>
                    </Grid>
                    {isNonMobile && (
                        <Grid
                            display="flex"
                            justifyContent="flex-end"
                            item
                            sm={9}
                            lg={9}
                        >
                            <IconButton className={classes.notificationIcon}>
                                <NotificationsNoneIcon/>
                            </IconButton>
                            <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                            </IconButton>
                        </Grid>
                    )}
                </Grid>

            </Toolbar>
        </AppBar>
        
    )
}

export default TopBarComponent