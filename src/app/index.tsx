import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../pages/root/root";
import { Note } from "../pages/note/note";
import { loader as rootLoader } from "../modules/NotesList";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "note/:noteId",
        element: <Note />,
        // loader: noteLoader,
        // action: noteAction,
        errorElement: <h2>Заметка не найдена</h2>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
