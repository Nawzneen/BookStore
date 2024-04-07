export async function getBooks(id?: string) {
  const url = id ? `/api/books/${id}` : "/api/books";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch books",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  console.log("data.books", data.books);
  return data.books;
}

// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }
