import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteAdminAuth = () => {
    const auth = true;
    return (
        auth ? <Outlet /> : <Navigate to="admin/login" />
    );
};

export default PrivateRouteAdminAuth