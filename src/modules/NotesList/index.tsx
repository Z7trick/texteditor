import { Link } from "react-router-dom";
import { getNotes } from "../../api/notes";
import { Note } from "../../types/Note";
import TagList from "./components/TagList/TagList";
import styles from "./styles.module.scss";
export async function loader() {
  return getNotes();
}
const NotesList = ({ notes }: { notes: Note[] }) => {
  return (
    <div className={styles.root}>
      <ul className={styles.ul}>
        {notes &&
          notes.map((note) => {
            return (
              <Link key={note.id} to={`/note/${note.id}`}>
                <li className={styles.li}>
                  <h3>{note.title}</h3>
                  <p>
                    {note.text.length > 140
                      ? note.text.slice(0, 139) + "..."
                      : note.text}
                  </p>
                  <TagList tags={note && note.tags} />
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default NotesList;
