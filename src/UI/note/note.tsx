interface NoteProps {
  title: string;
  content: string;
  tags: string[];
}

const Note = ({ title, content, tags }: NoteProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {tags.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Note;
