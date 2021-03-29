import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useAppSelector } from "../../redux/hooks";

export interface PrivateRouteProps extends RouteProps {
  isPrivate?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isPrivate, ...props }) => {
  const token = useAppSelector((state) => state.auth.token);
  return isPrivate && !token ? <Redirect to="/login" /> : <Route {...props} />;
};

export default PrivateRoute;
