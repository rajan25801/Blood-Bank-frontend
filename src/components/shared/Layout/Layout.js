import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../../redux/features/auth/authActions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch current user only if token exists
    if (localStorage.getItem("token")) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
