var users = [];
var searchedUsers = [];

function mapUsers() {
    var cardsRef = document.getElementById('cards');
    cardsRef.innerHTML = "";

    for (var i = 0; i < users.length; i++) {
        cardsRef.innerHTML +=
            '<div class="card text-success mb-3 my-3 " >' +
            '<div class="card-body">' +
            '<p class="card-text">' + '<i class="far fa-id-card">:</i>'
            + users[i].id + '</p>' +
            '<h6 class="card-text">' + '<i class="fas fa-user">:</i>'
            + users[i].name + '</h6>' +
            '<p class="card-text">' + '<i class="far fa-envelope">:</i>'
            + users[i].email + '</p>' +
            '<p class="card-text">' + '<i class="fas fa-map-marker-alt">:</i>'
            + users[i].address.street + users[i].address.suite + '  '
            + users[i].address.city + '  ' + users[i].address.zipcode + '  '
            + users[i].address.geo.lat + '  ' + users[i].address.geo.lng
            + '</p>' +
            '<p class="card-text">' + '<i class="fas fa-phone-volume">:</i>'
            + users[i].phone + '</p>' +
            '<p class="card-text">WEBSITE:' + users[i].website + '</p>' +
            '<p class="card-text">COMPANY:' + users[i].company.name + '  ' +
            users[i].company.catchPhrase + ' ' +
            users[i].company.bs + '</p>' +
            '</div>' +
            '</div>';
    }

}

function getUsers() {

    var xhr = new XMLHttpRequest();

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
function mapSearch() {
    var cardsRef = document.getElementById('cards');
    cardsRef.innerHTML = "";

    for (var i = 0; i < searchedUsers.length; i++) {
        cardsRef.innerHTML +=
            '<div class="card text-success mb-3 my-3">' +
            '<div class="card-body">' +
            '<p class="card-text">' + '<i class="far fa-id-card">:</i>'
            + searchedUsers[i].id + '</p>' +
            '<h6 class="card-text">' + '<i class="fas fa-user">:</i>'
            + searchedUsers[i].name + '</h6>' +
            '<p class="card-text">' + '<i class="far fa-envelope">:</i>'
            + searchedUsers[i].email + '</p>' +
            '<p class="card-text">' + '<i class="fas fa-map-marker-alt">:</i>'
            + searchedUsers[i].address.street + searchedUsers[i].address.suite + '  '
            + searchedUsers[i].address.city + '  ' + searchedUsers[i].address.zipcode + '  '
            + searchedUsers[i].address.geo.lat + '  ' + searchedUsers[i].address.geo.lng
            + '</p>' +
            '<p class="card-text">' + '<i class="fas fa-phone-volume">:</i>'
            + searchedUsers[i].phone + '</p>' +
            '<p class="card-text">WEBSITE:' + searchedUsers[i].website + '</p>' +
            '<p class="card-text">COMPANY:' + searchedUsers[i].company.name + '  ' +
            searchedUsers[i].company.catchPhrase + ' ' +
            searchedUsers[i].company.bs + '</p>' +
            '</div>' +
            '</div>';
    }

}

function searchUsers() {
    searchedUsers = [];
    var flag=1;
    var searchKey = document.getElementById('search').value;
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == searchKey) {
            searchedUsers.push(users[i]);
            flag=0;
        }     
        
    }
    if(flag)
    {
        var alert = '<div class="alert alert-success my-4" role="alert">' +
        '<p class="mb-0"> Oops Record not found !!!!...</p>' +
    '</div>';
     document.getElementById('alert1').innerHTML = alert;
    }
    mapSearch();
    document.getElementById('search').value = '';
}