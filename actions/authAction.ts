import { USER_LOGIN, USER_LOGOUT } from "./types"

export const userLogin = () => {
    return {
        type: USER_LOGIN,
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}

export const handleUserLogin = ({
    email,
    password,
    onSuccess = () => { }
    , onFail = () => { }
}: {
    email: string
    password: string
    onSuccess?: () => void
    onFail?: (resp?: any) => void
}): any => {
    return async (dispatch) => {
        try {
            if (email === 'fire@gmail.com') {
                if (password === '123456') {
                    dispatch(userLogin())
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                    onSuccess()
                } else {
                    onFail("Password is incorrect!")
                }
            } else {
                onFail("Email is incorrect!")
            }
        } catch (e) {
            onFail()
        }
    }
}

export const handleUserLogout = ({ onSuccess = () => { } }: {
    onSuccess?: () => void
}): any => async (dispatch) => {

    localStorage.removeItem("email")
    localStorage.removeItem("password")
    dispatch(userLogout())
    onSuccess();
}

export type IAuthActions =
    | ReturnType<typeof userLogin>
    | ReturnType<typeof userLogout>
