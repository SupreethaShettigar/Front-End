var books = [{ id: 1, name: 'Harry Potter', price: 900 },
{ id: 2, name: 'Maze runner', price: 1000 },
{ id: 3, name: 'Mahabharath', price: 700 }
];
$(document).ready(function () {

    addBook();   
});

function bookList() {
    var bookItems = '<tr><th>ID</th><th>NAME</th><th>PRICE</th><th>ACTION</th></tr>';
    for (var i = 0; i < books.length; i++) {
        bookItems += '<tr><td>' + books[i].id + '</td>' +
            '<td>' + books[i].name + '</td>' +
            '<td>' + books[i].price + '</td>' +
            '<td>'
            + '<button class="btn btn-default" onclick="deleteBook(' + i + ')">'
            + '<i class="fas fa-times text-danger"></i></button>'
            + '</td></tr>'

    }
    $('#table1').html(bookItems);
}

function deleteBook(index) {
    books.splice(index, 1)
    bookList()
}
function addBook() {
    var book = {
        id: document.getElementById('bookId').value,
        name: document.getElementById('bookName').value,
        price: document.getElementById('bookPsrice').value
    }
    books.push(book);
    bookList();
    document.getElementById('bookId').value = '';
    document.getElementById('bookName').value = '';
    document.getElementById('bookPrice').value = '';
}

