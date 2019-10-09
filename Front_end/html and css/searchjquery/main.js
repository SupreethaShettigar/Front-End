let users = [];
let value1;
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        value1 = $(this).val().toLowerCase();
        console.log(value1);
       /*$("#cards div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1)
        });*/
        console.log(value1.length)
        searchInput(value1);
    });
    getUsers();
    
    


});

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

function mapUsers() {
    $('#cards').html('');
    var listString = '';

    for (var i = 0; i < users.length; i++) {
        listString +=
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
    $('#cards').html(listString);

}

function searchInput(value1) {
    
    filteredUsers = [];

    filteredUsers = users.filter((user) => user.name.toLowerCase().indexOf(value1.toLowerCase()) >= 0)

    flag = (filteredUsers.length > 0) ? false : true;

    console.log(filteredUsers)

    if (value1.length > 0) {
        mapFilteredUsers()
        $('#cards').html('');
    }

    else {
        mapUsers()
        $('#filtered-cards').html('');
    }

    if (flag) {
        $('#alert').html('');
        var alertString ='';
        alertString+=
            '<div id="alert" class="alert alert-danger" role="alert">' +
            '<i class="fas fa-exclamation-circle fa-lg"></i>' +
            '<span class="ml-2 lead">' +
            'No records found' +
            '</span>' +
            '</div>'
            $('#alert').html(alertString);
    }
    else {
        $('#alert').html('');   
    }

}

function mapFilteredUsers() {
    $('#filtered-cards').html('');
    var filteredString = '';

    filteredUsers.forEach((filteredUser) => {
        filteredString +=
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
    $('#filtered-cards').html(filteredString);

}
