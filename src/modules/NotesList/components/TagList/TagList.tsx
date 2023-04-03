interface TagListProps {
  tags?: string[];
}
import styles from "./styles.module.scss";
const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className={styles.root}>
      {tags?.map((item, i) => {
        return (
          <li className={styles.item} key={i}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
