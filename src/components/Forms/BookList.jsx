import React, { useEffect, useState } from "react";
import { mainURL } from "../../constants/const";

const BookListFromAPI = ({subjectNameFromURL}) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  // API endpoint
  const API = `${mainURL}/api/${subjectNameFromURL}CH1/content/data`;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();

        // Set books to the data array from the response
        if (Array.isArray(result.data)) {
          setBooks(result.data);
          console.log(result.data);
          console.log(books);
        } else {
          setError("Invalid data format received from the API.");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Books Fetched from API</h2>

      {error && <p className="text-red-500">{error}</p>}

      {books.length === 0 ? (
        <p>No books available yet.</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Book ID: {book._id}</h3>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: book.text }} // Render HTML content
            />

            {book.img && (
              <div className="mt-4">
                <img
                  src={`http://192.168.1.11:3000/${book.img}`}
                  alt="Book"
                  className="w-64"
                />
              </div>
            )}

            {book.video && (
              <div className="mt-4">
                <video controls className="w-64">
                  <source
                    src={`http://192.168.1.11:3000/${book.video}`}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BookListFromAPI;
