import { Outlet, Navigate } from "react-router-dom";
import useAuthorizeStore from "../Pages/Store/authorizeStore";

const ProtectedRoutes = () =>{
    const authorizeStore = useAuthorizeStore((state) => state.auth);
    let auth = { token: authorizeStore };
    return auth.token ? <Outlet /> : <Navigate to="/login" />;

};
export default ProtectedRoutes;