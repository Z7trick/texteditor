import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../pages/root/root";
import { Note } from "../pages/note/note";
import { loader as rootLoader } from "../modules/NotesList";
import { loader as noteLoader } from "../modules/SingleNote";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "note/:noteId",
    element: <Note />,
    loader: noteLoader,
    errorElement: <h2>Заметка не найдена</h2>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
