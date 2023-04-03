import { memo } from "react";
import Button from "../../UI/button";
import styles from "./styles.module.scss";
interface FormModalProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeTitle: (event: React.FormEvent<HTMLInputElement>) => void;
  onChangeText: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onChangeTags: (event: React.FormEvent<HTMLInputElement>) => void;
  buttonText: string;
  title: string;
  text: string;
  tags: string;
}
const FormModal = memo(
  ({
    onSubmit,
    onChangeTitle,
    onChangeText,
    onChangeTags,
    buttonText,
    title,
    text,
    tags,
  }: FormModalProps) => {
    return (
      <>
        <form className={styles.form} method="post" onSubmit={onSubmit}>
          <label htmlFor="title">Название</label>
          <input
            placeholder="Название..."
            onChange={onChangeTitle}
            value={title}
            type="text"
            name="title"
          />
          <label htmlFor="descr">Описание</label>
          <textarea
            placeholder="Описание заметки..."
            onChange={onChangeText}
            value={text}
            name="descr"
            cols={30}
            rows={10}
          />
          <label htmlFor="tags">Теги</label>
          <input
            value={tags}
            placeholder="Напишите теги через пробел..."
            onChange={onChangeTags}
            type="text"
            name="tags"
          />
          <Button type="submit" text={buttonText} />
        </form>
      </>
    );
  }
);

export default FormModal;
