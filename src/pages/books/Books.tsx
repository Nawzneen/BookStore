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
  genre: string[];
  publication_year: number;
  description: string;
  cover_image: string;
  price: string;
};

export default function Books() {
  const [booksGenres, setBooksGenres] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // We get a promise here and not the data
  const booksPromise = useLoaderData();

  function renderBookElements(books: Book[]) {
    return books.map((book: Book) => (
      <div className="col-12  col-sm-6 col-md-4 col-lg-3">
        <div
          key={book.id}
          className="book-card d-flex flex-column justify-content-center align-items-center p-4"
        >
          <img src={book.cover_image} alt={book.title} width="200px" />
          <div className="book-card_details mt-3">
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
              {book.genre.map((genre) => (
                <span className=" book-card_genre">{genre}</span>
              ))}
            </div>
          </div>
          <button className="book-card_addBtn mt-4"> Add </button>
        </div>
      </div>
    ));
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
