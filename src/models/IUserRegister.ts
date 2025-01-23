export interface IUserRegister {
    message?: string;
    errors?:  Errors;
}

export interface Errors {
    email?: string[];
}