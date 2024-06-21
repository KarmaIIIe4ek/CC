import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import { Box, useTheme } from "@mui/material";
import { instance } from "../../../utils/axios";
import { useAppDispatch, useAppSelector } from "../../../utils/hook";
import { tokens } from "../../../theme";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema, RegisterSchema } from '../../../utils/yup'
import { useStyles } from "./styles";
import { loginUser, registerUser } from "../../../store/thunks/auth";


const AuthRootComponent: React.FC = (): JSX.Element => {
    const [samePasswords, setSamePasswords] = useState(false)
    const location = useLocation();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()
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
                await dispatch(loginUser(data))
                navigate('/user/lk')

            } catch (e) {
                return e
            }
            

        } else{
            if (data.password === data.repeatPassword) {
                try {
                    await dispatch(registerUser(data))
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
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={3}
                    borderRadius={5}
                    boxShadow={'0px 0px 10px 1px #202020'}
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