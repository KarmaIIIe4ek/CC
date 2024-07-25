import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return ({
        root: {
            width: '100%', 
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '100px !important',
            flexDirection: 'column',
        },
        welcomeText: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px !important',
            fontWeight: '500 !important',
            opacity: '0.8',
        },
        bgPadding: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            paddingBottom: '20px',
            paddingLeft: '40px',
            paddingRight: '40px',
            borderBottom: `1px solid ${colors.borderColor}`,
        },
        rates: {
            marginTop: '50px',
            alignItems: 'center',
            justifyContent: 'center',
        },
        betweenGraph: {
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            widht: 'auto',
            display: 'flex',
            flexDirection: 'column',
        },
        topCardItem: {
            display: 'flex',
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            margin: '20px 16px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '40%',
        },


    })
})