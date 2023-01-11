import { Navigate, Outlet} from "react-router-dom";

const AuthRoutes = () => {

    const token = localStorage.getItem('@draft-footz/userToken')
  
    return ( 
      <>

         {
            token ? <Outlet /> : <Navigate to='/'/>

         }

      </>
     );
}
 
export default AuthRoutes;