import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiUrl } from "../../Utils/Config.js";
import "./Sign.css";
import useAuthorizeStore from "../Store/authorizeStore.js";
import useclientadminStore from "../Store/clientadminStore.js";
import useCredentialsStore from "../Store/credentialsStore.js";

function Login() {
  const setAuth = useAuthorizeStore((state) => state.setAuth);
  const setRole = useclientadminStore((state) => state.setRole);
  const role = useclientadminStore((state) => state.role);
  const setCredentials = useCredentialsStore((state) => state.setCredentials);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationschema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("Invalid email format"),

    password: Yup.string().required("password is required"),
    // .min(8, "Password should not be less than 8 characters")
    // .max(15, "Password should not be more than 15 characters")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
    //   "Password should contain atleast one uppercase,one lowercase,one digit and one special character"
    // ),
  });
  const handleSubmit = async (formValues) => {
    console.log(formValues);
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
        credentials: "include",
      });
      // console.log(response);

      const data = await response.json();
      console.log(data);

      if (data.success === true) {
        setCredentials(data.data)
        setAuth(true);

        if (data.data.role === "admin") {
          navigate("/appointments");
          setError(false);
          setAuth(true);
          setRole(true);
          console.log(role);
        } else if (data.data.role === "client") {
          navigate("/");
          setAuth(true);
          setRole(false);
          console.log(role);
        }
      } else {
        setError(data.message);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,

    validationSchema: validationschema,
  });
  return (
    <div className="form-maincontainer">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="email">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="pass">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.password && formik.touched.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          {loading && <p style={{ color: "white" }}>Loading...</p>}
          <button type="submit" className="form-btn">
            Login
          </button>

          <p className="formtext">
            Dont have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
        <p className="eror">{error && error}</p>
      </form>
    </div>
  );
}

export default Login;
