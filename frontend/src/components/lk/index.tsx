import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Input, InputBase, Paper, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import AppButton from '../app_button';

const LKComponent = () => {
    const classes = useStyles()
    const [startSearch, setStartSearch] = useState(false);
    return (
        <React.Fragment>
            <Box justifyContent='center' textAlign='center' margin='20px 20px'>
                <Grid display='flex' justifyContent='center' textAlign='center' margin='30px 50px'>
                    <Input placeholder="Кошелёк/Адрес" fullWidth={true}/>
                    <AppButton className={classes.button}>Поиск</AppButton>
                </Grid>
                
                <Box className={classes.root}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Grid container className={classes.topCardItem}>
                            <Grid item xs={12} sm={6} lg={6}>
                                Risk Score
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Grid container className={classes.topCardItem}>
                            <Grid item xs={12} sm={6} lg={6}>
                                Опасные средства
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
        
    );
}

export default LKComponent;
