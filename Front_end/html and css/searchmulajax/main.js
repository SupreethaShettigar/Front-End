let users = [];
let filteredUsers = [];
let flag = false;

function mapUsers() {
    let cardsRef = document.getElementById('cards');
    cardsRef.innerHTML = "";

    for (var i = 0; i < users.length; i++) {
        cardsRef.innerHTML +=
            '<div class="card my-3">' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' + '<i class="fas fa-at mr-3"></i>' + users[i].name + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-user mr-3"></i>' + users[i].username + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-envelope mr-3"></i>' + users[i].email + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-phone mr-3"></i>' + users[i].phone + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-globe mr-3"></i>' + users[i].website + '</li>' +
            '</ul>' +
            '</div>';
    }

}

function getUsers() {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (xhr.status >= 200 && xhr.status < 300) {
            users = JSON.parse(xhr.response)
            mapUsers()
            document.getElementById('progress').style.display = 'none';
        } else {
            console.log('The request failed!');
        }
    };

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()
}

function searchInput(event) {
    let searchKey = event.target.value
    filteredUsers = [];

    filteredUsers = users.filter((user) => user.name.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0)

    flag = (filteredUsers.length > 0) ? false : true;

    console.log(filteredUsers)

    if (searchKey.length > 0) {
        mapFilteredUsers()
        document.getElementById('cards').innerHTML = ''
    }

    else {
        mapUsers()
        document.getElementById('filtered-cards').innerHTML = ''
    }

    if (flag) {
        document.getElementById('alert').innerHTML =
            '<div id="alert" class="alert alert-danger" role="alert">' +
            '<i class="fas fa-exclamation-circle fa-lg"></i>' +
            '<span class="ml-2 lead">' +
            'No records found' +
            '</span>' +
            '</div>'
    }
    else {
        document.getElementById('alert').innerHTML = ''
    }

}


function mapFilteredUsers() {
    let filteredCardsRef = document.getElementById('filtered-cards');
    filteredCardsRef.innerHTML = ''
    filteredUsers.forEach((filteredUser) => {
        filteredCardsRef.innerHTML +=
            '<div class="card my-3">' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' + '<i class="fas fa-at mr-3"></i>' + filteredUser.name + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-user mr-3"></i>' + filteredUser.username + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-envelope mr-3"></i>' + filteredUser.email + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-phone mr-3"></i>' + filteredUser.phone + '</li>' +
            '<li class="list-group-item">' + '<i class="fas fa-globe mr-3"></i>' + filteredUser.website + '</li>' +
            '</ul>' +
            '</div>';
    })
}



