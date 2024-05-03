import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    navigate: (to: string) => void
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

export interface IPublicUser{
    email: string,
    password: string,
    token: string,
}