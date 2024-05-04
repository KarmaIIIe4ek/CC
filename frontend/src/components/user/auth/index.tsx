import React, { useState, useEffect } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import './style.scss'
import { Box, useTheme } from "@mui/material";
import { instance } from "../../../utils/axios";
import { useAppDispatch, useAppSelector } from "../../../utils/hook";
import { login } from "../../../store/slice/user/auth";
import { AppErrors } from "../../../common/errors";
import { tokens } from "../../../theme";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema, RegisterSchema } from '../../../utils/yup'


const AuthRootComponent: React.FC = (): JSX.Element => {
    const [samePasswords, setSamePasswords] = useState(false)
    const location = useLocation();
    const apiUrlCreate = "auth/sign-up"
    const apiUrlLoggin = "auth/sign-in"
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(
            location.pathname === '/user/login' ? LoginSchema : RegisterSchema,
        ),
    })

    const loading = useAppSelector((state) => state.auth.isLoading)

    const handleSubmitForm = async (data: any) => {
        if (location.pathname === "/user/login") {
            try {
                const userData = {
                    email: data.email,
                    password: data.password,
                }
                
                const user = await instance.post(apiUrlLoggin, userData)
                await dispatch(login(user.data))
                navigate('/user/lk')

            } catch (e) {
                return e
            }
            

        } else{
            if (data.password === data.repeatPassword) {
                try {
                    const userData = {
                        email: data.email,
                        password: data.password,
                    }
                    await instance.post(apiUrlCreate, userData)
                    const user = await instance.post(apiUrlLoggin, userData)
                    await dispatch(login(user.data))
                    navigate('/user/lk')
                } catch (err) {
                    console.log(err)
                    return err
                }
            }
            else {
                setSamePasswords(!samePasswords)
            }
            
        }
    }
     
    

    return(
        <div className='root'>
            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
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
                    bgcolor={colors.primary[500]}
                >
                    {(location.pathname === '/user/login')
                     ? <LoginPage
                      navigate={navigate}
                      register={register} 
                      errors={errors} 
                      loading={loading}
                      /> : (location.pathname === '/user/register') ? 
                      <RegisterPage 
                        navigate={navigate}
                        register={register}
                        errors={errors}
                        loading={loading}
                        samePasswords={samePasswords} /> : null
                      }
                </Box>
            </form>
        </div>
    );
    
};


export default AuthRootComponent;