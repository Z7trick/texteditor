import styles from "./styles.module.scss";
const Overlay = ({ onClick }: { onClick: () => void }) => {
  return <div onClick={onClick} className={styles.overlay}></div>;
};

export default Overlay;
