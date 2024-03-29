import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      GuestLayout
      <Outlet />
    </div>
  );
};

export default GuestLayout;
