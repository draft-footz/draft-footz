import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
    iDataLogin,
    iDataNewUser,
    iUserData,
    iUserResponse,
    iUsersContext,
    iUsersProvider,
} from "../types/UsersContextTypes";

export const UserContext = createContext({} as iUsersContext);

export const UsersProvider = ({ children }: iUsersProvider) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState({} as iUserData);
    const [token, setToken] = useState('');

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
            const requisition = await api.post("/login", data);
            console.log(requisition.data);
            localStorage.setItem("@AcessToken", requisition.data.accessToken);
            localStorage.setItem("@user", JSON.stringify(requisition.data.user.id));

            if(requisition.status === 200 ) {
                setUser(requisition.data.user);
                setToken(requisition.data.accessToken);
            }
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    async function updateUserTeam(teamId: number) {
        try {
            const requisition = await api.patch<iUserResponse>(
                `users/${user.id}`,
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
            if(requisition.status === 200) {
                setUser(requisition.data.user);
            };
        } catch (err) {
            console.log(err);
        };
    }

    return (
        <UserContext.Provider
            value={{
                createNewUser,
                userLogin,
                updateUserTeam,
                user,
                token
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
