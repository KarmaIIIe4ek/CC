import { Button, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { IPropsRegister } from "../../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    
    const {setEmail, setPassword, setRepeatPassword} = props;
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Регистрация
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Введите данные для регистрации
            </Typography>
            <TextField fullWidth={true} margin="normal" id="outlined-basic" label="Email" variant="outlined" placeholder="Введите ваш email" onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth={true} type='password' margin="normal" id="outlined-basic" label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(e) => setPassword(e.target.value)}/>
            <TextField fullWidth={true} type='password' margin="normal" id="outlined-basic" label="Repeet Password" variant="outlined" placeholder="Повторите пароль" onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type="submit" sx={{fontFamily:'Poppins', marginTop: 2, width: '60%'}} variant="contained" onClick={() => {}}>Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily:'Poppins'}}>
                У вас уже есть аккаунт? <span className="incitingText">Войти</span>
            </Typography>
        </>
    );
};


export default RegisterPage;