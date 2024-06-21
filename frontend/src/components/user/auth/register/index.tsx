import { TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { IPropsRegister } from "../../../../common/types/auth";
import { useStyles } from "./styles";
import AppButton from "../../../app_button";
import AppLoadingButton from "../../../app_loading_button";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const classes = useStyles()
    const {navigate, register, errors, loading, samePasswords} = props
    return (
        <>
            <Typography variant="h2" textAlign='center'>
                Регистрация
            </Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>
                Введите данные для регистрации
            </Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                type="password"
                fullWidth={true}
                margin='normal'
                label="Пароль"
                variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <TextField
                error={!!errors.repeatPassword}
                type="password"
                fullWidth={true}
                margin='normal'
                label="Повторите пароль"
                variant="outlined"
                placeholder="Повторите ваш пароль"
                helperText={errors.repeatPassword ? `${errors.repeatPassword.message}` : ''}
                {...register('repeatPassword')}
            />
            {samePasswords ? <Typography variant="body1" textAlign='left' color='red'>
                Пароли должны совпадать!
            </Typography>: <></>}
            <AppLoadingButton loading={loading} type="submit" sx={{marginTop: 2, width: '60%'}} variant="contained" onClick={() => {}}>Регистрация</AppLoadingButton>
            <Typography variant="body1" margin='10px 0px 0px 0px'>
                У вас уже есть аккаунт? <span className={classes.incitingText} onClick={() => navigate("/user/login")}>Войти</span>
            </Typography>
        </>
    );
};


export default RegisterPage;