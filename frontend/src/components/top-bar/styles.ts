import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 24px',
            backgroundColor: colors.primary.DEFAULT,
            maxHeight: '95px',
            borderBottom: `1px solid ${colors.borderColor}`,
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