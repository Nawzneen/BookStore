import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./server"; // The local server with fake api

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
// import NotFound from "./components/NotFound";
// import Login from "./components/Login.tsx";
// import Error from "./components/Error.tsx";
import Home from "./components/Home";
import About from "./components/About";
import Books, { loader as booksLoader } from "./pages/books/Books";
// import BookDetails from "./pages/books/BookDetails.tsx";

type Theme = "dark" | "light";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<Theme>("dark");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Layout
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            toggleTheme={toggleTheme}
          />
        }
      >
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route
          path="login"
          element={<Login />}
          // passing down the loggedin status to the action function
          action={(obj) => loginAction(obj, setIsLoggedIn)}
          // action={loginAction}
          loader={loginLoader}
        /> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books">
          <Route
            index
            element={<Books />}
            loader={booksLoader}
            // errorElement={<Error />}
          />
          {/* <Route
            path=":id"
            element={<BookDetails />}
            loader={bookDetailLoader}
            errorElement={<Error />}
          /> */}
        </Route>
      </Route>
    )
  );

  return (
    <div className="App-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
