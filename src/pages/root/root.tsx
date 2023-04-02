import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";
import CreateNote from "../../components/CreateNote/CreateNote";

export const Root = () => {
  return (
    <main className={styles.root}>
      <section>
        <Container>
          <CreateNote />
        </Container>
      </section>
    </main>
  );
};
