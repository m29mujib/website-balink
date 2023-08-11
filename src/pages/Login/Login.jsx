import styles from "./Login.module.css";
import Logo from "../../assets/images/Balink 1.png";
import Gambar from "../../assets/images/bg.jpg";
import InputLogin from "../../elements/InputLogin/InputLogin";
import IconVisibility from "../../assets/icons/visibility_off.svg";
import IconVisibilityOpen from "../../assets/images/eyes3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [icon, setIcon] = useState(IconVisibility);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.trim() === "");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError(event.target.value.trim() === "");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    if (icon === IconVisibility) {
      setIcon(IconVisibilityOpen);
    } else {
      setIcon(IconVisibility);
    }
  };

  const onSubmit = () => {
    if (username.trim() === "") {
      setUsernameError(true);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    }

    if (username.trim() !== "" && password.trim() !== "") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.backgroundImage}>
        <img src={Gambar} className={styles.gambar} />
      </div>
      <form className={styles.form}>
        <div className={styles.logo} id="logo">
          <img src={Logo} className={styles.imageLogo} />
          <p className="body-large-regular mt-2 text-center">
            Nikmati kegiatan dan wisata anda dengan{" "}
            <span className="body-large-semibold">Balink</span>. Aman, Nyaman
            dan Mudah untuk kita bersama.
          </p>
          {usernameError && passwordError && (
            <p className={styles.errorText}>Invalid username or password</p>
          )}
        </div>
        <div className="input-patern" id="input-patern">
          <div className="username">
            <label className="body-large-semibold label">Username</label>
            <InputLogin
              type="text"
              className={`${styles.input} ${usernameError ? styles.error : ""}`}
              placeholder="Masukan Username"
              id="username"
              name="username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <label className="body-large-semibold label">Password</label>
          <div className={styles.password}>
            <InputLogin
              type={showPassword ? "text" : "password"}
              className={`${styles.input} ${passwordError ? styles.error : ""}`}
              placeholder="Masukan Password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={icon}
              className={styles.iconvisibility}
              onClick={toggleShowPassword}
            />
          </div>
          <div className={styles.button}>
            <button
              type="button"
              className={styles.btnLogin}
              onClick={() => onSubmit()}
            >
              Masuk
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
