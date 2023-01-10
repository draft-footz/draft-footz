import { SectionWelcome } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UsersContext";
import { Navigate } from "react-router-dom";

export const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {
        user.name ?
        (
          <SectionWelcome>
            <div>
              <figure>
                <img src="/logo-welcome.svg" alt="" />
              </figure>
              <div>
                <h2>Bem-vindo ao Draft Footz, {user.name} </h2>
              </div>
            </div>
          </SectionWelcome>
        )
        :
        (
          <Navigate to="/login" />
        )
      }
    </>
  );
};
