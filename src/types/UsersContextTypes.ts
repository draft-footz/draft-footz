import { ReactNode } from "react";
import { VoidExpression } from "typescript";

export interface iUsersProvider {
    children: ReactNode;
}

export interface iUsersContext {
    createNewUser: (data: iDataNewUser) => void;
    userLogin: (data: iDataLogin) => void;
    updateUserTeam: (data: iUserUpdateTeam) => void;
}

export interface iDataNewUser {
    email: string;
    password: string;
    name: string;
    contact: string;
    champion: number | null;
}

export interface iDataLogin {
    email: string;
    password: string;
}

export interface iUserUpdateTeam {
    name: string;
    logo: string;
}
