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
function set(notes: Note[]) {
  return localforage.setItem("notes", notes);
}
