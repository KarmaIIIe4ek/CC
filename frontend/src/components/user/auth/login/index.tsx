import { Button, TextField, Typography } from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { IPropsLogin } from "../../../../common/types/auth";
import { useTheme } from "@mui/styles";
import { tokens } from "../../../../theme";
import { useStyles } from "./styles";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const { navigate, register, errors, loading } = props;
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Авторизация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите ваш логин и пароль
            </Typography>

            <TextField 
                error={!!errors.email}
                fullWidth={true} 
                margin="normal" 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                placeholder="Введите ваш email" 
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField 
                error={!!errors.password}
                fullWidth={true} 
                type='password' 
                margin="normal" 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                placeholder="Введите ваш пароль" 
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <Button type="submit" sx={{fontFamily:'Poppins', marginTop: 2, width: '60%'}} variant="contained" >Войти</Button>
            <Typography variant="body1" sx={{fontFamily:'Poppins'}}>
                У вас нет аккаунта? <span className="incitingText" onClick={() => navigate("/user/register")}>Регистрация</span>
            </Typography>
        </>
    );
};

export default LoginPage;
