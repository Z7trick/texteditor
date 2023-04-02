import styles from "./styles.module.scss";
import SearchInput from "../../UI/searchInput/searchInput";
import Button from "../../UI/button";

interface SearchProps {
  searchQuery: string;
  handleSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
const Search = ({ searchQuery, handleSearchChange, onClick }: SearchProps) => {
  return (
    <div className={styles.root}>
      <SearchInput
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <Button onClick={onClick} text="Найти по тегу" />
    </div>
  );
};

export default Search;
