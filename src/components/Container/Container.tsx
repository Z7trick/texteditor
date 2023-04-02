import { FC } from "react";
import styles from "./styles.module.scss";

const Container: FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
