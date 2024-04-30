import React, { useState, useEffect } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import './style.scss'
import { Box } from "@mui/material";
import { instance } from "../../../utils/axios";
import { useAppDispatch } from "../../../utils/hook";
import { login } from "../../../store/slice/user/auth";
import { AppErrors } from "../../../common/errors";


const AuthRootComponent: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const location = useLocation();
    const apiUrlCreate = "auth/sign-up"
    const apiUrlLoggin = "auth/sign-in"
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (location.pathname === "/user/login") {
            try {
                const userData = {
                    email,
                    password,
                }
                const user = await instance.post(apiUrlLoggin, userData)
                await dispatch(login(user.data))
                navigate('/user/lk')

            } catch (e) {
                return e
            }
            

        } else{
            if (password === repeatPassword) {
                try {
                    const userData = {
                        email,
                        password,
                    }
                    const createUser = await instance.post(apiUrlCreate, userData)
                    const user = await instance.post(apiUrlLoggin, userData)
                    await dispatch(login(user.data))
                    navigate('/user/lk')
                } catch (err) {
                    console.log(err)
                    return err
                }
                
                
            }
            else {
                throw new Error(AppErrors.PasswordDoNotMatch)
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
                     ? <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate}/> : (location.pathname === '/user/register')
                      ? <RegisterPage setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword} navigate={navigate}/> : null
                      }
                </Box>
            </form>
        </div>
    );
    
};


export default AuthRootComponent;