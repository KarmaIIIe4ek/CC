import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            background: `${colors.primary.DEFAULT} !important`,
            borderBottom: `1px solid ${colors.borderColor}`,
            boxShadow: 'none !important',
        },
        toolbar: {
            justifyContent: 'spase-between',
            padding: '10px 25px',
        },
        icons: {
            paddingRight: '20px',
        },
        notificationIcon: {
            marginRight: '15px !important',
        },
        themeIcon: {
            marginRight: '20px',
        },
        menuIcon: {
            marginRight: '10px',
            cursor: 'pointer',
        },
    }
})