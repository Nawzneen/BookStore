import React, { useEffect } from "react";
import {
  useSearchParams,
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
// import TypeBtn from "../../Components/Button/TypeBtn";
import { getBooks } from "../../api";
export function loader() {
  // return getBooks();
  // returning a promise
  const getBooksPromise = getBooks();
  return defer({ Books: getBooksPromise });
}

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string | string[];
  publication_year: number;
  description: string;
  cover_image: string;
  price: string;
};
type StringArrayState = string[];
export default function Books() {
  const [booksGenres, setBooksGenres] = React.useState<StringArrayState>([
    "Fiction",
    "Science Fiction",
    "Fantasy",
    "Classic",
    "Dystopian",
    "Romance",
    "Fiction",
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  // We get a promise here and not the data
  const booksPromise = useLoaderData();

  function handleFilterChange(key: string, value: string) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  React.useEffect(() => {
    function getBookGenres(books: Book[]) {
      const genres: string[] = [];
      books.map((book) => {
        if (Array.isArray(book.genre)) {
          return book.genre.map((genre) => {
            return genres.push(genre);
          });
        } else {
          return genres.push(book.genre);
        }
      });
      console.log("genres", genres);
      const uniqueGenres = Array.from(new Set(genres));

      setBooksGenres(uniqueGenres);
    }
  }, [booksGenres]);

  function renderBookElements(books: Book[]) {
    // Getting books genre
    // **

    // const genres: string[] = [];
    // books.map((book) => {
    //   if (Array.isArray(book.genre)) {
    //     return book.genre.map((genre) => {
    //       return genres.push(genre);
    //     });
    //   } else {
    //     return genres.push(book.genre);
    //   }
    // });
    // console.log("genres", genres);
    // const uniqueGenres = Array.from(new Set(genres));

    // setBooksGenres(uniqueGenres);
    // **
    const genreFilter = searchParams.get("genre");
    const displayedBooks = genreFilter
      ? books.filter((book) => book.genre === genreFilter)
      : books;

    return (
      <>
        <div className="d-flex  justify-content-between align-items-center mt-5">
          <div
            className="
          book-filter-container"
          >
            <ul className="book-filter-li d-flex justify-content-start">
              {booksGenres.map((bookGenre) => (
                <li key={String(bookGenre)}>
                  <span
                    className={
                      genreFilter === bookGenre
                        ? `filter-book-genre bg-${bookGenre}`
                        : "filter-book-genre"
                    }
                    onClick={() => {
                      handleFilterChange("genre", bookGenre); // Fix: Pass a single string value from uniqueGenres array
                    }}
                  >
                    {bookGenre}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {genreFilter ? (
            <button
              className="clear-filter"
              onClick={() => setSearchParams({})}
            >
              Clear filter
            </button>
          ) : null}
        </div>
        {displayedBooks.map((book: Book) => (
          <div className="col-12  col-sm-6 col-md-6 col-lg-3">
            <div key={book.id} className="book-card d-flex flex-column  p-4">
              <div className="d-flex justify-content-center">
                <img src={book.cover_image} alt={book.title} width="200px" />
              </div>
              <div className="book-card_details mt-3 align-items-start">
                <h4 className="">{book.title}</h4>
                <div className="d-flex flex-row justify-content-between">
                  <span className="">
                    By <span className="fw-bold">{book.author}</span>
                  </span>
                  <span>
                    {" "}
                    <span className="book-card_price">{book.price}</span>$
                  </span>
                </div>

                <div className="mt-3">
                  {Array.isArray(book.genre) ? (
                    book.genre.map((genre) => (
                      <span className="book-card_genre">{genre}</span>
                    ))
                  ) : (
                    <span className="book-card_genre">{book.genre}</span>
                  )}
                </div>
              </div>
              <button className="book-card_addBtn mt-4"> Add </button>
            </div>
          </div>
        ))}
        ;
      </>
    );
  }

  return (
    <div className="book-section">
      <div className="container">
        <h2 className="fw-bold mt-5 ">Explore our books</h2>
        <React.Suspense fallback={<h2 className="mt-5">Loading Books...</h2>}>
          <div className="row g-3 pt-5 pb-5">
            <Await resolve={(booksPromise as { Books: Book[] }).Books}>
              {(books) => renderBookElements(books)}
            </Await>
          </div>
        </React.Suspense>
      </div>
    </div>
  );
}
