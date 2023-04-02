import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";
import NotesList from "../../modules/NotesList";

export const Root = () => {
  return (
    <main className={styles.root}>
      <section>
        <Container>
          <NotesList />
        </Container>
      </section>
    </main>
  );
};
