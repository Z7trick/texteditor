import { Link, useLoaderData } from "react-router-dom";
import { getNotes } from "../../api/notes";
import CreateNewNote from "../CreateNewNote";
import { Note } from "../CreateNewNote/types/Note";
import styles from "./styles.module.scss";
export async function loader() {
  return getNotes();
}
const NotesList = () => {
  const notes = useLoaderData() as Note[];
  return (
    <div className={styles.root}>
      <ul>
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CreateNewNote />
        </li>
        {notes &&
          notes.map((note) => {
            const title =
              note.title!.length > 14 ? note.text?.slice(0, 13) : note.title;
            return (
              <Link key={note.id} to={`/note/${note.id}`}>
                <li>
                  <h3>{title}</h3>
                  <p>{note.text}</p>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default NotesList;
