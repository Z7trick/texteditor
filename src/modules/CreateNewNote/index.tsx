import { useState } from "react";
import { createNote } from "../../api/notes";
import Button from "../../UI/button";
import CreationModal from "./components/CreationModal/CreationModal";
import FormModal from "./components/FormModal/FormModal";
const CreateNewNote = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    await createNote({
      title,
      text,
      tags: tags.split(" "),
    });
    target.reset();
    setText("");
    setTitle("");
    setTags("");
    setIsOpened(false);
  };
  const onChangeTitle = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setTitle(target.value);
  };
  const onChangeText = (event: React.FormEvent) => {
    const target = event.target as HTMLTextAreaElement;
    setText(target.value);
  };
  const onChangeTags = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setTags(target.value);
  };
  return (
    <>
      <CreationModal
        onClose={() => setIsOpened(false)}
        isOpened={isOpened}
        onSubmit={onSubmit}
      >
        <FormModal
          onChangeTags={onChangeTags}
          onChangeText={onChangeText}
          onChangeTitle={onChangeTitle}
          onSubmit={onSubmit}
        />
      </CreationModal>
      <Button
        text="Добавить новую заметку"
        onClick={() => setIsOpened(!isOpened)}
      />
    </>
  );
};

export default CreateNewNote;
