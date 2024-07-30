import React from "react";

import styles from "./style.module.css";
import { LoginForm } from "./form";

import blogIllustration from "../../assets/login/blogIllustration.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../../redux/store";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/user/login`,
        {
          email: values.email,
          password: values.password,
        }
      );
      if (data.success) {
        navigate("/blogs");
        dispatch(authActions.login(data.user._id));
      }
    } catch {
      alert("user not exist");
    }
  };
  const onFormFailed = (errorInfo) => {};
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.leftInfo}>
        <div className={styles.TitleInfo}>
          <p>Log in to your account</p>
          <p>Welcome!</p>
        </div>
        <div className={styles.formWrapper}>
          <LoginForm onLogin={onLogin} onFormFailed={onFormFailed} />
        </div>
        <p className={styles.signupInfo}>
          Don't have an account?{" "}
          <span
            className={styles.signupLink}
            onClick={() => navigate("/register")}
          >
            Sign up here.
          </span>
        </p>
      </div>
      <div className={styles.rightInfo}>
        <img src={blogIllustration} alt="illustration" />
      </div>
    </div>
  );
}
