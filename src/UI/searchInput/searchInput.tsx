import styles from "./styles.module.scss";
interface SearchInputProps {
  searchQuery: string;
  handleSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ searchQuery, handleSearchChange }: SearchInputProps) => {
  return (
    <input
      className={styles.root}
      name="search"
      type="text"
      placeholder="Искать..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
