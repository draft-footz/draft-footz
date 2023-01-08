import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const [token, setToken] = useState("");

  useEffect(() => {
    let localToken = localStorage.getItem('@draft-footz/userToken');
    let localUser = localStorage.getItem('@draft-footz/user');

    if(localToken && localUser) {
      let newUser = JSON.parse(localUser);
      getUser(localToken, newUser);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      await api.post("/login", data)
      .then((response) => {
        localStorage.setItem("@draft-footz/userToken", response.data.accessToken);
        localStorage.setItem("@draft-footz/user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        setToken(response.data.accessToken);
        toast.success('Usuário logado com sucesso!')
        navigate("/dashboard");
      });
    } catch (error) {
      toast.error('Falha ao logar.')
    }
  };

  const getUser = async (token: string, user: iUserData) => {
    try {
      await api.get(`users/${user.id}`, {
        headers: { authorization: `Bearer ${token}`},
        data: {
          userId: user.id
        }
      })
      .then((response) => {
        setUser(response.data);
        setToken(token);
        navigate("/dashboard");
      })
    } catch {
      setToken('');
      localStorage.removeItem('@draft-footz/userToken');
    }
  }

  async function updateUserTeam(teamId: number) {
    try {
      const requisition = await api.patch<iUserResponse>(`users/${user.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          myTeam: teamId,
        },
      });
      if (requisition.status === 200) {
        setUser(requisition.data.user);
      }
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
