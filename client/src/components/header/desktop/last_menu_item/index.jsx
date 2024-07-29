import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

export const LastMenuItem = (props) => {
  const { handleLogout } = props;
  const navigate = useNavigate();
  return (
    <div
      className={styles.lastMenuWrapper}
      onClick={() => {
        handleLogout();
        navigate("/login");
      }}
    >
      Logout
    </div>
  );
};
