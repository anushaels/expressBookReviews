const axios = require('axios');

const BASE_URL = "http://localhost:5000";

// Task 10.1 - Get all books using async/await
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("All Books:", response.data);
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
}

// Task 10.2 - Get book by ISBN using Promises
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then(response => console.log("Book by ISBN:", response.data))
    .catch(error => console.error("Error fetching book by ISBN:", error.message));
}

// Task 10.3 - Get books by Author using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    console.log("Books by Author:", response.data);
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// Task 10.4 - Get books by Title using Promises
function getBooksByTitle(title) {
  axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`)
    .then(response => console.log("Books by Title:", response.data))
    .catch(error => console.error("Error fetching books by title:", error.message));
}

// Call the functions (make sure your server is running on port 5000 first)
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("Fairy tales");

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };