export interface IPropsLogin {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    navigate: (to: string) => void
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