import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "vm";
import { api } from "../services/api";
import {
    iDataLogin,
    iDataNewUser,
    iUsersContext,
    iUsersProvider,
    iUserUpdateTeam,
} from "../types/UsersContextTypes";

const UserContext = createContext({} as iUsersContext);

export const UsersProvider = ({ children }: iUsersProvider) => {
    const navigate = useNavigate();
    const idUser = localStorage.getItem("@team-user");
    const token = localStorage.getItem("@acessToken");

    async function createNewUser(data: iDataNewUser) {
        let newData = { ...data, myTeam: null };
        try {
            const requisition = await api.post("tournaments", newData);
            console.log(requisition);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    const userLogin = async (data: iDataLogin) => {
        try {
            const response = await api.post("/login", data);
            console.log(response.data);
            localStorage.setItem("@AcessToken", response.data.accessToken);
            localStorage.setItem(
                "@user",
                JSON.stringify(response.data.user.id)
            );
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    async function updateUserTeam(teamId: number) {
        try {
            const requisition = await api.patch(
                `users/${idUser}`,

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    data: {
                        myTeam: teamId,
                    },
                }
            );
            console.log(requisition);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <UserContext.Provider
            value={{
                createNewUser,
                userLogin,
                updateUserTeam,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
