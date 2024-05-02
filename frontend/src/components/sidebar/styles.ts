import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return ({
        root: {
            borderBottom: `1px solid ${colors.borderColor}`,
            width: '100%', 
        },
        menu: {
            marginBottom:'55px',
        },
        brand: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px', 
            padding: '20px 15px',
            cursor: 'pointer'
        },
        brandTitle: {
            color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`,
        },
        navItem: {
            '&:hover':{
                backgroundColor: '#1900D5 !important',
                color: "#FFFFFF",
                borderRadius: '4px',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT}`,
                },
            }
        }
    
    })
})