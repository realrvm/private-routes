import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/shared/ui/button";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { authActions } from "@/features/auth";

import styles from "./styles.module.scss";

type HeaderProps = Record<string, never>;

export const Header: FC<HeaderProps> = () => {
  const authIsTrue = useActionCreators(authActions);

  const handleLogin = () => {
    authIsTrue.setIsAuth(true);
  };

  const handelLogout = () => {
    authIsTrue.setIsAuth(false);
  };

  return (
    <div className={styles.header}>
      <Button caption="Login" onClick={handleLogin} />
      <Button caption="Logout" onClick={handelLogout} />
      <Link to="/content">Content</Link>
    </div>
  );
};
