import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      await api.post("tournaments", newData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  const userLogin = async (data: iDataLogin) => {
    console.log(data)
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

  const [loading, setLoading] = useState(false)

  return (
    <UserContext.Provider
      value={{
        createNewUser,
        userLogin,
        updateUserTeam,
        user,
        token,
        loading,
        setLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
