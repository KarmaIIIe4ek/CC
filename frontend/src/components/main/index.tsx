import React, {useState, useEffect} from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets } from "../../store/thunks/assets";
import { useStyles } from "./styles";
import { PieChart } from "@mui/x-charts/PieChart";
import gradient_200_140 from "../../assets/images/home_page/gradient_200_140.png"
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart, lineElementClasses, LinePlot, markElementClasses, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";

const scoreDraw = () => {
    return (
      <Card>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={gradient_200_140}
            alt="green iguana"
          />                                     
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Risk Score
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Комплексное решение для оценки и управления рисками,
                 связанными с криптовалютными транзакциями. 
                 Используя продвинутые алгоритмы и глобальные базы данных, 
                 Risk Score помогает выявлять и предотвращать нелегальные действия, 
                 автоматизируя процесс проверки и отчетности.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const explorerDraw = () => {
    return (
        <Card>
          <CardActionArea>
            <CardContent>
            <ChartContainer 
                width={600}
                height={300}
                series={[{ type: 'line', data: pData }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                    stroke: '#8884d8',
                    strokeWidth: 2,
                    },
                    [`& .${markElementClasses.root}`]: {
                    stroke: '#8884d8',
                    scale: '0.6',
                    fill: '#fff',
                    strokeWidth: 2,
                    },
                    width: '100%',
                }}
                disableAxisListener
                >
                <LinePlot />
                <MarkPlot />
                </ChartContainer>
            </CardContent>                                
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Block Explorer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Блокчейн-Эксплорер - Мощный инструмент для детального анализа
                 и отслеживания транзакций в блокчейне. Включает функции 
                 глубокого анализа, исторических данных, мониторинга в 
                 реальном времени и построения графов транзакций. Эксплорер 
                 обеспечивает полное соответствие требованиям AML, CFT и 
                 KYC, упрощая процесс проверки и повышая безопасность.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        );
    
}

const MainComponent = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Box>
                <Box className={classes.root}>
                    <Grid className={classes.bgPadding}>
                        <Typography className={classes.welcomeText}>Добро пожаловать в CoinsCheck</Typography>
                        <Typography className={classes.welcomeText}>—</Typography>
                        <Typography className={classes.welcomeText}>Вашего партнера в аналитике криптовалютных транзакций</Typography>
                    </Grid>
                    <Box className={classes.rates}>
                        <Typography className={classes.welcomeText}>Наши услуги:</Typography>
                            <Box className={classes.betweenGraph}  >
                                <Grid item className={classes.topCardItem} >
                                        <Grid xs={12} sm={12} lg={12} display="flex !important">
                                            {scoreDraw()}
                                        </Grid>
                                    </Grid>
                                <Grid className={classes.topCardItem} >
                                    <Grid item xs={12} sm={12} lg={12}>
                                            {explorerDraw()} 
                                    </Grid>
                                </Grid>
                            </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default MainComponent;