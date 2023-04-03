import { memo } from "react";
import Note from "../../UI/note/note";
interface NoteBlock {
  title: string;
  content: string;
  tags: string[];
}
const NoteBlock = memo(({ title, content, tags }: NoteBlock) => {
  return (
    <>
      <Note title={title} content={content} tags={tags} />
    </>
  );
});

export default NoteBlock;
