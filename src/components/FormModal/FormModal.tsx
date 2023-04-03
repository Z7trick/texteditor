import { memo } from "react";
import Button from "../../UI/button";
import styles from "./styles.module.scss";
interface FormModalProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeTitle: (event: React.FormEvent<HTMLInputElement>) => void;
  onChangeText: (event: React.FormEvent<HTMLTextAreaElement>) => void;
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
          <h4>Теги</h4>
          <ul>
            {tags.split(" ").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <Button type="submit" text={buttonText} />
        </form>
      </>
    );
  }
);

export default FormModal;
