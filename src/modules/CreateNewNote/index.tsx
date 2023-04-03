import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../api/notes";
import FormModal from "../../components/FormModal/FormModal";
import Button from "../../UI/button";
import CreationModal from "./components/CreationModal/CreationModal";
import styles from "./styles.module.scss";
const CreateNewNote = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const note = await createNote({
      title,
      text,
      tags: tags.split(" ").map((item) => {
        if (item[0] === "#") return item;
        else if (item) return (item = "#" + item);
        else return item;
      }),
    });
    target.reset();
    setText("");
    setTitle("");
    setTags("");
    setIsOpened(false);
    navigate(`/note/${note?.id}`);
  };
  const onChangeTitle = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setTitle(target.value);
  };
  const onChangeText = (event: React.FormEvent) => {
    const target = event.target as HTMLTextAreaElement;
    setText(target.value);
  };

  return (
    <>
      <CreationModal onClose={() => setIsOpened(false)} isOpened={isOpened}>
        <FormModal
          title={title}
          text={text}
          tags={tags}
          buttonText="Создать заметку"
          onChangeText={onChangeText}
          onChangeTitle={onChangeTitle}
          onSubmit={onSubmit}
        />
      </CreationModal>
      <div className={styles.root}>
        <Button
          text="Добавить новую заметку"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
    </>
  );
};

export default CreateNewNote;
