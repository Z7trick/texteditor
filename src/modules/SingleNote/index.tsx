import { useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { editNote, getNote } from "../../api/notes";
import FormModal from "../../components/FormModal/FormModal";
import NoteBlock from "../../components/NoteBlock/NoteBlock";
import { Note } from "../../types/Note";
import Button from "../../UI/button";
import DeleteNote from "./components/DeleteNote/DeleteNote";
import EditModal from "./components/EditModal/EditModal";
import styles from "./styles.module.scss";
export async function loader({ params }: { params: any }) {
  const note = await getNote(params.noteId);
  if (!note) return null;
  return note;
}
const SingleNote = () => {
  const note = useLoaderData() as Note;
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const [text, setText] = useState(note.text);
  const [title, setTitle] = useState(note.title);
  const [tags, setTags] = useState(note.tags.join(" "));
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedNote = {
      text,
      title,
      tags: tagsWithoutDuplicates,
      id: note.id,
    };
    await editNote(note.id, updatedNote);
    setIsOpened(false);
    navigate("/");
  };
  const tagsWithoutDuplicates = useMemo(() => {
    const a = tags.split(" ").map((item) => {
      if (item[0] === "#") return item;
      else if (item) return (item = "#" + item);
      else return item;
    });
    return [...new Set(a)];
  }, [tags]);
  const onChangeTitle = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setTitle(target.value);
  };
  const onChangeText = (event: React.FormEvent) => {
    const target = event.target as HTMLTextAreaElement;
    const newTags = target.value.match(/(#\w+)|(#[а-я]+)/g)?.join(" ");
    if (newTags && newTags !== tags) {
      setTags(`${newTags}`);
    } else if (!newTags) {
      setTags("");
    } else {
      setTags((prev) => prev);
    }
    setText(target.value);
  };
  return (
    <div className={styles.root}>
      <EditModal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <FormModal
          title={title}
          text={text}
          tags={tags}
          onSubmit={onSubmit}
          onChangeText={onChangeText}
          onChangeTitle={onChangeTitle}
          buttonText="Подтвердить изменения"
        />
      </EditModal>
      <NoteBlock content={note.text} title={note.title} tags={note.tags} />
      <div className={styles.buttonsList}>
        <Button onClick={() => setIsOpened(true)} text="Редактировать" />
        <DeleteNote id={note.id} />
      </div>
    </div>
  );
};

export default SingleNote;
