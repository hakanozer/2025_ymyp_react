import api from "./api";

export const userLogin = ( email: string, password: string ) => {
    const sendObj = {
        email: email,
        password: password
    }
    return api.post('auth/login', sendObj)
}