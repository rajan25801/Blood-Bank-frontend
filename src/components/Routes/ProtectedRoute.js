import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/features/auth/authActions";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
