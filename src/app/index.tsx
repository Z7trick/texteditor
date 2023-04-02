import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../pages/root/root";
import { NewNote } from "../pages/new/new";
import { Note } from "../pages/note/note";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "new",
        element: <NewNote />,
        // action: newNoteAction,
      },
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
