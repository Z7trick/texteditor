import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getNote } from "../../api/notes";
import NoteBlock from "../../components/NoteBlock/NoteBlock";
import { Note } from "../../types/Note";
import Button from "../../UI/button";
import DeleteNote from "./components/DeleteNote/DeleteNote";
import styles from "./styles.module.scss";
export async function loader({ params }: { params: any }) {
  const note = await getNote(params.noteId);
  if (!note) return null;
  return note;
}
const SingleNote = () => {
  const note = useLoaderData() as Note;
  const onClick = useCallback(() => {
    console.log("123");
  }, []);
  return (
    <div className={styles.root}>
      <NoteBlock content={note.text} title={note.title} tags={note.tags} />
      <div className={styles.buttonsList}>
        <Button onClick={onClick} text="Редактировать" />
        <DeleteNote id={note.id} />
      </div>
    </div>
  );
};

export default SingleNote;
