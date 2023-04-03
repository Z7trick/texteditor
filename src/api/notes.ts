import localforage from "localforage";
import { Note } from "../modules/CreateNewNote/types/Note";
export async function getNotes() {
  let notes = await localforage.getItem("notes");
  if (!notes) notes = [];
  return notes as Note[];
}
export async function createNote({ title, text, tags }: Note) {
  let id = Math.random().toString(36).substring(2, 9);
  let note: Note = { id, title, text, tags };
  let notes = await getNotes();
  notes.unshift(note);
  await set(notes);
  return note;
}
export async function getNote(id: string) {
  let notes = (await localforage.getItem("notes")) as Note[];
  let note = notes.find((note) => note.id === id);
  return note ?? null;
}

export async function deleteNote(id: string) {
  let notes = (await localforage.getItem("notes")) as Note[];
  let index = notes.findIndex((note) => note.id === id);
  if (index > -1) {
    notes.splice(index, 1);
    await set(notes);
    return true;
  }
  return false;
}
function set(notes: Note[]) {
  return localforage.setItem("notes", notes);
}
