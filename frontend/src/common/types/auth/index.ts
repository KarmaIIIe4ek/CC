import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > {
    navigate: (to: string) => void
    register: UseFormRegister<any>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > {
    navigate: (to: string) => void
    register: UseFormRegister<any>
    errors: FieldErrors<TFieldValues>
    loading: boolean
    samePasswords: boolean
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
    isLoading: boolean,
}

export interface IPublicUser{
    email: string,
    password: string,
    token: string,
}

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    email: string
    password: string
    repeatPassword: string
}
