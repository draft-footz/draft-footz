import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  iDataLogin,
  iDataNewUser,
  iUpdateUserResponse,
  iUserData,
  iUsersContext,
  iUsersProvider,
} from "../types/UsersContextTypes";

export const UserContext = createContext({} as iUsersContext);

export const UsersProvider = ({ children }: iUsersProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as iUserData);
  const [token, setToken] = useState("");

  console.log(user);

  async function createNewUser(data: iDataNewUser) {
    let newData = { ...data, teamId: null };
    console.log(newData);

    try {
      await api.post("tournaments", newData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  const userLogin = async (data: iDataLogin) => {
    try {
      const requisition = await api.post("/login", data);
      localStorage.setItem("@AcessToken", requisition.data.accessToken);
      localStorage.setItem("@user", JSON.stringify(requisition.data.user.id));

      if (requisition.status === 200) {
        setUser(requisition.data.user);
        setToken(requisition.data.accessToken);
      }
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  async function updateUserTeam(teamId: number) {
    let data = {
      teamId: teamId,
    };
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api
        .patch<iUpdateUserResponse>(`users/${user.id}`, data)
        .then((response) => setUser(response.data));
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
        user,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
