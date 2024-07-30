import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RegisterForm } from "./form";

import styles from "./style.module.css";

import blogIllustration from "../../assets/login/blogIllustration.jpg";

export function Register() {
  const navigate = useNavigate();

  const onRegister = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/user/register`,
        {
          username: values.firstName,
          email: values.email,
          password: values.password,
        }
      );
      if (data.success) {
        navigate("/blogs");
      }
    } catch (error) {
      alert("user already exist");
    }
  };
  const onFormFailed = (errorInfo) => {};

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.leftInfo}>
        <div className={styles.TitleInfo}>
          <p>Create your account</p>
          <p>Welcome!</p>
        </div>
        <div className={styles.formWrapper}>
          <RegisterForm onRegister={onRegister} onFormFailed={onFormFailed} />
        </div>
        <p className={styles.signupInfo}>
          Already have an account?{" "}
          <span
            className={styles.signupLink}
            onClick={() => navigate("/login")}
          >
            Log in here.
          </span>
        </p>
      </div>
      <div className={styles.rightInfo}>
        <img src={blogIllustration} alt="illustration" />
      </div>
    </div>
  );
}
