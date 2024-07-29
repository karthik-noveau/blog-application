import { useSelector, useDispatch } from "react-redux";

import { DeskNavbar } from "./desktop";
import { MobileHeader } from "./mobile";
import { authActions } from "../../redux/store";
import React from "react";

export const Header = () => {
  const { loginInfo } = useSelector((state) => ({
    loginInfo: state.auth.loginInfo,
  }));
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <DeskNavbar loginInfo={loginInfo} handleLogout={handleLogout} />
      <MobileHeader loginInfo={loginInfo} handleLogout={handleLogout} />
    </React.Fragment>
  );
};
