import { useState, createContext, useEffect } from "react";
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
import { sucessLogin } from "../utils/toast";

export const UserContext = createContext({} as iUsersContext);

export const UsersProvider = ({ children }: iUsersProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as iUserData);
  const [token, setToken] = useState("");
  const [login, setLogin] = useState<boolean>(true);

  useEffect(() => {
    let localToken = localStorage.getItem("@draft-footz/userToken");
    let localUser  = localStorage.getItem("@draft-footz/user");

    if (localToken && localUser) {
      let newUser = JSON.parse(localUser);
      getUser(localToken, newUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createNewUser(data: iDataNewUser) {
    let newData = { ...data, teamId: null };

    try {
      await api.post("tournaments", newData);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }

  const userLogin = async (data: iDataLogin) => {
    try {
      setLoading(true);

      const response = await api.post("login", data);

        setLogin(true)
        sucessLogin()
        setToken(response.data.accessToken)
        setUser(response.data.user)
        window.localStorage.setItem("@draft-footz/userToken", response.data.accessToken);
        window.localStorage.setItem("@draft-footz/user", JSON.stringify(response.data.user));
        
        navigate("/dashboard") 

    } catch (err) { 
       setLogin(false)
    
  } finally {
    setLoading(false)
  }
  };

  const getUser = async (token: string, user: iUserData) => {
    try {
      await api
        .get(`users/${user.id}`, {
          headers: { authorization: `Bearer ${token}` },
          data: {
            userId: user.id,
          },
        })
        .then((response) => {
          setUser(response.data);
          setToken(token);
          navigate("/dashboard");
        });
    } catch {
      setToken("");
      localStorage.removeItem("@draft-footz/userToken");
      localStorage.removeItem("@draft-footz/user");
    }
  };

  async function updateUserTeam(teamId: number | null) {
    let data = {
      teamId: teamId,
    };
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api
        .patch<iUpdateUserResponse>(`users/${user.id}`, data)
        .then((response) => setUser(response.data));
    } catch (err) {
      console.error(err);
    }
  }

  const logoutDashboard: () => void = () => {
    localStorage.removeItem("@draft-footz/userToken");
    localStorage.removeItem("@draft-footz/user");
    console.log('rodou!')
    navigate("/");
  }

  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        createNewUser,
        userLogin,
        updateUserTeam,
        user,
        token,
        loading,
        setLoading,
        login,
        setLogin,
        logoutDashboard
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
