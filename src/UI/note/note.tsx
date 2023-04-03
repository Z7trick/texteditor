interface NoteProps {
  title: string;
  content: string;
  tags: string[];
}
import { memo } from "react";
import styles from "./styles.module.scss";
const Note = memo(({ title, content, tags }: NoteProps) => {
  return (
    <article className={styles.root}>
      <h1>{title}</h1>
      <p>{content}</p>
      <ul>
        {tags.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </article>
  );
});

export default Note;
