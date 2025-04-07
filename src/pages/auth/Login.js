import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import { userLogin } from "../../redux/features/auth/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const result = await dispatch(userLogin(formData));
    if (result.meta.requestStatus === "fulfilled") {
      const role = result.payload?.user?.role;

      // Navigate user based on role
      if (role === "admin") navigate("/admin");
      else if (role === "hospital") navigate("/hospital");
      else if (role === "organization") navigate("/organization");
      else if (role === "donar") navigate("/donar");
    } else {
      // Error already set by slice
      alert(result.payload?.message || "Login failed!");
    }
  };

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-7 form-banner">
            <img src="./assets/images/banner1.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
              onSubmit={handleLogin}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
