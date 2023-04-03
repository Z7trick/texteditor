import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";
import NotesList from "../../modules/NotesList";
import CreateNewNote from "../../modules/CreateNewNote";
import { useLoaderData } from "react-router-dom";
import { Note } from "../../types/Note";
import { useCallback, useState } from "react";
import Search from "../../components/Search/Search";

export const Root = () => {
  const notes = useLoaderData() as Note[];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const handleSearchChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchQuery(target.value);
  };
  const onClick = () => {
    const filteredNotes = [];
    for (let i = 0; i < notes.length; i++) {
      for (let j = 0; j < notes[i].tags.length; j++) {
        if (searchQuery.toLowerCase() === notes[i].tags[j].toLowerCase()) {
          filteredNotes.push(notes[i]);
        }
      }
    }
    setFilteredNotes([...filteredNotes]);
  };
  const onReset = () => {
    setFilteredNotes(notes);
    setSearchQuery("");
  };
  return (
    <main className={styles.root}>
      <section>
        <Container>
          <div className={styles.line}>
            <CreateNewNote />
            <Search
              onReset={onReset}
              onClick={onClick}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
            />
          </div>
          <NotesList notes={filteredNotes} />
        </Container>
      </section>
    </main>
  );
};
