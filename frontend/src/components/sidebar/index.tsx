import React, { useEffect, useState } from "react";
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
import { tokens } from "../../theme";
import FlexBetween from "../flex-between";

const SideBarComponent = (props: any) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, sideBarIsOpen, setSideBarIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

    return (
        <Box component='nav'>
            {sideBarIsOpen && (
                <Drawer
                    open={sideBarIsOpen}
                    onClose={() => setSideBarIsOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        }
                    }}
                >
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Typography>Demo</Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                    </Box>
                </Drawer>
                    
            )}
            <h1>This is sideBar</h1>
        </Box>
    )
}

export default SideBarComponent