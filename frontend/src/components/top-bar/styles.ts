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
            padding: '24px 24px',
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