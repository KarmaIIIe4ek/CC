import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import React, { FC, useContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CClogo from "../../assets/images/sidebar/ССlogo.png"
import { ColorModeContext } from "../../theme";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import AppButton from "../app_button";

const TopBarHomeComponent = (): JSX.Element => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar className={classes.toolbar}>
            <Grid
                    container
                    alignItems="center"
                    width="100%"
                    display= "flex"
                    justifyContent='space-between'
                >
                    <Grid
                            display="flex"
                            justifyContent="flex-start"
                            item
                            >
                            <Box className={classes.brand}  onClick={() => navigate('')}>
                            <img src={CClogo} alt="Logo image"/>
                            <Typography variant='h3' className={classes.brandTitle}>CoinsCheck</Typography>
                            </Box>
                        </Grid>
                            <Grid
                            display="flex"
                            justifyContent="flex-between"
                            >
                                <Typography variant='h5' className={classes.blockExplorer} padding="0px 15px" onClick={() => navigate('block-explorer')}>Блок-эксплорер</Typography>
                                <Typography variant='h5' className={classes.brand} padding="0px 15px" onClick={() => navigate('services')}>Услуги</Typography>
                                <Typography variant='h5' className={classes.brand} padding="0px 15px" onClick={() => navigate('rates')}>Тарифы</Typography>
                                <Typography variant='h5' className={classes.brand} padding="0px 15px" onClick={() => navigate('about')}>О нас</Typography>
                                <Typography variant='h5' className={classes.brand} padding="0px 15px" onClick={() => navigate('support')}>Поддержка</Typography>

                        </Grid>
                              
                    <Grid
                            display="flex"
                            justifyContent="flex-end"
                        >
                            <Box display="flex" justifyContent="flex-end" marginRight={5}>
                            <AppButton variant="contained" size="large" onClick={() => navigate('user/login')}>Войти</AppButton>
                            </Box> 
                            <IconButton className={classes.notificationIcon}>
                                <NotificationsNoneIcon/>
                            </IconButton>
                            <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                            </IconButton>
                        </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
        
    )
}

export default TopBarHomeComponent