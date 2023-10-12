import "./Login.css";
import Navbar from "../components/navbar";
import { useForm } from "../hooks/useForm";
import { loginValidate } from "../validation/ValidationRules";
import { setUser } from "../data/repository";
import { useNavigate } from "react-router-dom";

function Login({ loginUser }) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    loginValidate
  );

  const navigate = useNavigate();

  function login() {
    setUser(values.email);
    loginUser(values.email);
    navigate("/profile");
  }

  return (
    <div>
      <Navbar scrollTop={false} username={null} />
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Sign In</h1>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-email">
              <label className="field-title">
                Email:
                <br />
                <input
                  className={`input ${errors.email && "is-danger"}`}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
                {errors.email && (
                  <p className="error-message is-danger">{errors.email}</p>
                )}
              </label>
            </div>
            <div className="form-password">
              <label className="field-title">
                Password:
                <br />
                <input
                  className={`input ${errors.password && "is-danger"}`}
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  required
                />
                {errors.password && (
                  <p className="error-message is-danger">{errors.password}</p>
                )}
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;