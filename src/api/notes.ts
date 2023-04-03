import localforage from "localforage";
import { Note } from "../types/Note";
export async function getNotes() {
  let notes = await localforage.getItem("notes");
  if (!notes) notes = [];
  return notes as Note[];
}
type CreateNoteType = {
  [key in keyof Note]?: Note[key];
};
export async function createNote({ title, text, tags }: CreateNoteType) {
  let id = Math.random().toString(36).substring(2, 9);
  if (title && text && tags) {
    let note: Note = { id, title, text, tags };
    let notes = await getNotes();
    notes.unshift(note);
    await set(notes);
    return note;
  }
}
export async function editNote(id: string, note: Note) {
  let notes = await getNotes();
  notes = notes.map((item) => {
    if (item.id === id) {
      return note;
    } else {
      return item;
    }
  });
  // [...notes, { id, ...note }]
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
