import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    root:{
        display: 'flex',
        width: '100%',
    },
    mainSection: {
        display: 'flex',
        width: `${`calc(100% - 250px)`}`,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})