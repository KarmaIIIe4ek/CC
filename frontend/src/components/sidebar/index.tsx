import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./styles";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material'
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material'
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../flex-between";
import { navMenu } from "../../common/moks/navigete";
import CC from "../../assets/images/sidebar/CC.png"
import { ISidebarProps } from "../../common/types/sidebar";

const SideBarComponent: FC<ISidebarProps> = (props: ISidebarProps): JSX.Element => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, sideBarIsOpen, setSideBarIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id}>
                <ListItemButton className={active === ("/" + element.path) ? `${classes.navItem} ${classes.active}` : classes.navItem} onClick={() => navigate(`${element.path}`)}>
                    <ListItemIcon>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1">
                            {element.name}
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <Box component='nav'>
            {sideBarIsOpen && (
                <Drawer
                    open={sideBarIsOpen}
                    onClose={() => setSideBarIsOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: (isNonMobile ? drawerWidth : drawerWidth + 32),
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: (isNonMobile ? drawerWidth : drawerWidth + 32),
                        }
                    }}
                >   
                    <Box className={classes.root}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand} onClick={() => navigate('user/lk')}>
                                    <img src={CC} alt="Logo image"/>
                                    <Typography variant='h4' className={classes.brandTitle}>
                                        CoinsCheck
                                        </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.menu}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem >
                                <ListItemButton className={`${classes.navItem}`}>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1">Выход</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                    
            )}
        </Box>
    )
}

export default SideBarComponent