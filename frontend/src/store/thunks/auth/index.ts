import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData, IRegisterData } from "../../../common/types/auth";
import { instance } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
    'auth/sign-in',
    async (data: ILoginData, {rejectWithValue}) => {
        try {
            const user = await instance.post("auth/sign-in", data)
            if (
                user.data.status === 400 ||
                user.data.status === 401 ||
                user.data.status === 500
            )
                return  
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('email', user.data.email)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else{
                return rejectWithValue(error.message)
            }
        }

    }
)

export const registerUser = createAsyncThunk(
    'auth/sign-up',
    async (data: IRegisterData, {rejectWithValue}) => {
        try {
            const userData = {
                email: data.email,
                password: data.password,
            }
            const createNewUser = await instance.post("auth/sign-up", userData)
            if (
                createNewUser.data.status === 400 ||
                createNewUser.data.status === 401 ||
                createNewUser.data.status === 500
            )
                return
            const user = await instance.post("auth/sign-in", userData)
            if (
                user.data.status === 400 ||
                user.data.status === 401 ||
                user.data.status === 500
            )
                return
                sessionStorage.setItem('token', user.data.token)
                sessionStorage.setItem('email', user.data.email)
            
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else{
                return rejectWithValue(error.message)
            }
        }

    }
)