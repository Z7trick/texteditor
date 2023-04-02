import Button from "../../UI/button";
import styles from "./styles.module.scss";
const CreateNote = () => {
  return (
    <div className={styles.root}>
      <Button text="Создать заметку" />
    </div>
  );
};

export default CreateNote;
