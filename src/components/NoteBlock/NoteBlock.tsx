import Button from "../../UI/button";
import Note from "../../UI/note/note";
import styles from "./styles.module.scss";
interface NoteBlock {
  title: string;
  content: string;
  tags: string[];
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
const NoteBlock = ({ title, content, tags, onClick }: NoteBlock) => {
  return (
    <div className={styles.root}>
      <Note title={title} content={content} tags={tags} />
      <Button onClick={onClick} text="Редактировать" />
    </div>
  );
};

export default NoteBlock;
