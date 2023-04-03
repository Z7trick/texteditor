import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import SingleNote from "../../modules/SingleNote";
import styles from "./styles.module.scss";
export const Note = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">Перейти на главную страницу</Link>
      </div>
      <main className={styles.root}>
        <section>
          <Container>
            <SingleNote />
          </Container>
        </section>
      </main>
    </>
  );
};
