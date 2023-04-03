import styles from "./styles.module.scss";
import SearchInput from "../../UI/searchInput/searchInput";
import Button from "../../UI/button";

interface SearchProps {
  searchQuery: string;
  handleSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  onReset: () => void;
}
const Search = ({
  searchQuery,
  handleSearchChange,
  onClick,
  onReset,
}: SearchProps) => {
  return (
    <div className={styles.root}>
      <SearchInput
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <span onClick={onReset}>&#10006;</span>
      <Button onClick={onClick} text="Найти по тегу" />
    </div>
  );
};

export default Search;
