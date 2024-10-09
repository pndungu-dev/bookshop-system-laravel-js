// Handle adding books to the list (in dashboard)
document.getElementById('bookForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the book title from the input field
    const bookTitle = document.getElementById('bookTitle').value;

    // Create a new list item for the book
    const bookItem = document.createElement('li');
    bookItem.className = 'list-group-item';
    bookItem.textContent = bookTitle;

    // Add the new list item to the book list
    document.getElementById('bookList').appendChild(bookItem);

    // Clear the input field after adding the book
    document.getElementById('bookTitle').value = '';
});

// Handle signing out
function signOut() {
    window.location.href = 'signin.html';
}
