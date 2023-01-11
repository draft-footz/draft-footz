import { ReactNode } from "react";
export interface iUsersProvider {
  children: ReactNode;
}
export interface iUsersContext {
  createNewUser: (data: iDataNewUser) => void;
  userLogin: (data: iDataLogin) => void;
  updateUserTeam: (teamId: number | null) => void;
  user: iUserData;
  token: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  login: boolean;
  setLogin: (login: boolean) => void;
  logoutDashboard: () => void;

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

export interface iUserData {
  email: string;
  name: string;
  contact?: string;
  teamId: number | null;
  id: number;
}

export interface iUserResponse {
  accessToken: string;
  user: {
    email: string;
    name: string;
    contact?: string;
    teamId: number | null;
    id: number;
  };
}

export interface FormInputs {
  name: string;
  email: string;
  emailConfirmation: string;
  password: string;
  passwordConfirmation: string;
  contact: string;
  username: string;
}

export type GlobalContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export interface iUpdateUserResponse {
  email: string;
  name: string;
  contact?: string;
  teamId: number | null;
  id: number;
}

export interface iLoginFormData {
  email: string;
  password: string;
}
