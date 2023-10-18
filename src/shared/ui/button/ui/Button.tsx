import { ButtonHTMLAttributes, FC, memo } from "react";

import styles from "./styles.module.scss";

type ButtonProps = {
  caption: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = memo((props) => {
  const { caption, ...rest } = props;

  return (
    <button className={styles.button} {...rest}>
      {caption}
    </button>
  );
});
