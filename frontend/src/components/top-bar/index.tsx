import { Box, Grid, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { ColorModeContext, tokens } from "../../theme";

const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <>
            <Box display='flex' justifyContent='space-between' px="32px" py="16px" bgcolor={colors.accentMain}>
                <Grid>Welcome {user.email}</Grid>
                <Box display='flex'>
                    <IconButton sx={{mr: '15px'}}>
                        <NotificationsNoneIcon/>
                    </IconButton>
                    <Grid onClick={colorMode.toggleColorMode}>
                        <IconButton >
                            {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                        </IconButton>
                        

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default TopBarComponent