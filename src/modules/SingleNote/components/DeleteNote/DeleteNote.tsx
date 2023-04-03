import { SetStateAction, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../../../api/notes";
import Button from "../../../../UI/button";

const DeleteNote = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const onDelete = useCallback(async () => {
    const isDeleted = await deleteNote(id);
    if (isDeleted) {
      navigate("/");
    } else {
      alert("Ошибка, не можем удалить заметку");
    }
  }, []);
  return <Button onClick={onDelete} text="Удалить заметку" />;
};

export default DeleteNote;
