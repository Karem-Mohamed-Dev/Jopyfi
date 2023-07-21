import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/Home";
import ApplicationPage, {loader as appLoader} from "./Pages/ApplicationPage";
import ProfilePage from "./Pages/Profile";
import SavedJopsPage from "./Pages/SavedJops";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "application",
        children: [{ path: ":id", element: <ApplicationPage />, loader: appLoader }],
      },
      { path: "profile", element: <ProfilePage /> },
      { path: "savedjops", element: <SavedJopsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
