import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Input, InputBase, Paper, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import AppButton from '../app_button';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Pie, PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const LKComponent = () => {
    const classes = useStyles()
    const [startSearch, setStartSearch] = useState(false);
    const value = 34;
    const dataRiskScore = {
        labels: ['Опасные', 'Безопасные', 'Подозрительные'],
        datasets: [
          {
            label: '%',
            data: [20, 50, 30],
            backgroundColor: [
              'rgba(255, 1, 1, 0.5)',
              'rgba(1, 255, 1, 0.5)',
              'rgba(255, 148, 26, 0.5)',
            ],
            borderColor: [
              'rgba(255, 0, 0, 1)',
              'rgba(1, 255, 1, 1)',
              'rgba(255, 148, 26, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const dataDangerCoins = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const getColorByValue = (value: number): string => {
        if (value >= 0 && value <= 10) {
          return "#00FF00"; // Зелёный
        } else if (value >= 11 && value <= 30) {
          return "#FFA500"; // Оранжевый
        } else {
          return "#FF0000"; // Красный
        }
      };
      
    return (
        <React.Fragment>
            <Box justifyContent='center' textAlign='center' margin='20px 20px'>
                <Grid display='flex' justifyContent='center' textAlign='center' margin='30px 50px' paddingRight='50px'>
                    <Input placeholder="Кошелёк/Адрес" fullWidth={true}/>
                    <AppButton className={classes.button}>Поиск</AppButton>
                </Grid>
                
                <Box className={classes.root}>
                    <Grid container spacing={2} className={classes.betweenGraph}  >
                    <Grid xs={11} sm={6} lg={6}>
                        <Grid className={classes.topCardItem} >
                          <Box>
                            <Grid item xs={12} sm={12} lg={12}>
                                <Typography variant='h2'>Risk Score</Typography> 
                            </Grid>
                            <Grid item xs={12} sm={12} lg={12}>
                                <Typography variant='h1' color={`${getColorByValue(value)}`}>{value}</Typography> 
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} className={classes.graph}>
                                <Pie data={dataRiskScore}/>
                            </Grid>
                          </Box>
                            
                        </Grid>
                    </Grid>
                    <Grid xs={11} sm={6} lg={6}>
                        <Grid className={classes.topCardItem} >
                          <Box>
                            <Grid item xs={12} sm={12} lg={12}>
                                <Typography variant='h2'>Опасные средства</Typography> 
                            </Grid>
                            <Grid item xs={12} sm={12} lg={12}>
                                <Typography variant='h1'> </Typography> 
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} className={classes.graph}>
                                <PolarArea data={dataDangerCoins}/>
                            </Grid>
                          </Box>
                            
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
        
    );
}

export default LKComponent;
