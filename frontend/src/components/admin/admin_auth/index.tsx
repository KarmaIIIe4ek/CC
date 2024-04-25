import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import './style.scss'
import { Box } from "@mui/material";
import { Navigate, Route } from "react-router-dom";
import axios from "axios";

const AdminAuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const adminData = {
            email,
            password,
        }

        console.log(adminData)
    }

    return(
        <div className={'root'}>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center'>
                Админ
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center'>
                Введите ваш логин и пароль
            </Typography>

            <TextField fullWidth={true} margin="normal" id="outlined-basic" label="Email" variant="outlined" placeholder="Введите ваш email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField fullWidth={true} type='password' margin="normal" id="outlined-basic" label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" sx={{fontFamily:'Popins', marginTop: 2, width: '60%'}} variant="contained" onClick={() => {}}>Войти</Button>
        </>
                </Box>
            </form>
        </div>
    );
    
};

export default AdminAuthPage;
