import { TextField, Typography } from "@mui/material";
import React from "react";
import { IPropsLogin } from "../../../../common/types/auth";
import { useStyles } from "./styles";
import AppButton from "../../../app_button";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const { navigate, register, errors, loading } = props;
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>
                Авторизация
            </Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>
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
            <AppButton type="submit" sx={{marginTop: 2, width: '60%'}} variant="contained" >Войти</AppButton>
            <Typography variant="body1" margin='10px 0px 0px 0px'>
                У вас нет аккаунта? <span className={classes.incitingText} onClick={() => navigate("/user/register")}>Регистрация</span>
            </Typography>
        </>
    );
};

export default LoginPage;
