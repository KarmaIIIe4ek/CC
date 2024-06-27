import {makeStyles} from "@mui/styles";
import {tokens} from "../../theme";
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            flexGrow: 1,
            padding: '32px'
        },
        topCardItem: {
            display: 'flex',
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            margin: '20px 16px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            justifyContent: 'center !important',
            alignItems: 'center',
            gap: '10px',

        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize'
        },
        itemDetails: {
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        },
        button: {
            color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`,
            cursor: 'pointer',
        },
        graph: {
            display: 'flex',
            padding: '10px 5px',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '50%',
        },
        betweenGraph: {
            justifyContent: 'space-between',
            height: '100%',
            display: 'flex',
        }
    }
})