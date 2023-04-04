import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser)
// const currentUser = false

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
