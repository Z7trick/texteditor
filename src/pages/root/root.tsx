import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";
import NotesList from "../../modules/NotesList";
import CreateNewNote from "../../modules/CreateNewNote";

export const Root = () => {
  return (
    <main className={styles.root}>
      <section>
        <Container>
          <div className={styles.line}>
            <CreateNewNote />
          </div>
          <NotesList />
        </Container>
      </section>
    </main>
  );
};
