import { Button, TextField, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { IPropsLogin } from "../../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {

    const {setEmail, setPassword, navigate} = props;
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Авторизация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите ваш логин и пароль
            </Typography>

            <TextField fullWidth={true} margin="normal" id="outlined-basic" label="Email" variant="outlined" placeholder="Введите ваш email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField fullWidth={true} type='password' margin="normal" id="outlined-basic" label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" sx={{fontFamily:'Poppins', marginTop: 2, width: '60%'}} variant="contained" >Войти</Button>
            <Typography variant="body1" sx={{fontFamily:'Poppins'}}>
                У вас нет аккаунта? <span className="incitingText" onClick={() => navigate("/user/register")}>Регистрация</span>
            </Typography>
        </>
    );
};

export default LoginPage;
