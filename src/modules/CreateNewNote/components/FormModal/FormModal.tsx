import { memo } from "react";
import Button from "../../../../UI/button";
import styles from "./styles.module.scss";
interface FormModalProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeTitle: (event: React.FormEvent<HTMLInputElement>) => void;
  onChangeText: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onChangeTags: (event: React.FormEvent<HTMLInputElement>) => void;
}
const FormModal = memo(
  ({ onSubmit, onChangeTitle, onChangeText, onChangeTags }: FormModalProps) => {
    return (
      <>
        <form className={styles.form} method="post" onSubmit={onSubmit}>
          <label htmlFor="title">Название</label>
          <input onChange={onChangeTitle} type="text" name="title" />
          <label htmlFor="descr">Описание</label>
          <textarea onChange={onChangeText} name="descr" cols={30} rows={10} />
          <label htmlFor="tags">Теги</label>
          <input onChange={onChangeTags} type="text" name="tags" />
          <Button type="submit" text="Создать заметку" />
        </form>
      </>
    );
  }
);

export default FormModal;
