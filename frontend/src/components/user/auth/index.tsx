import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import './style.scss'
import { Box } from "@mui/material";
import { instance } from "../../../utils/axios";


const AuthRootComponent: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [token, setToken] = useState()
    const location = useLocation();
    const apiUrlCreate = "auth/sign-up"
    const apiUrlLoggin = "auth/sign-in"
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (location.pathname === "/user/login") {
            const userData = {
                email,
                password,
            }
            const user = await instance.post(apiUrlLoggin, userData)
            .then(response => setToken(response.data.token))
            .catch(err => console.error(err))
        } else{
            if (password === repeatPassword) {
                const userRegisterData = {
                    email,
                    password,
                }
                const createUser = await instance.post(apiUrlCreate, userRegisterData)
                .then(response => console.log("User created"))
                .catch(err => console.error(err))
            }
            else {
                throw new Error("Пароли должны совпадать!")
            }
            
        }
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
                    {(location.pathname === '/user/login')
                     ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : (location.pathname === '/user/register')
                      ? <RegisterPage setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword}/> : null
                      }
                </Box>
            </form>
        </div>
    );
    
};


export default AuthRootComponent;