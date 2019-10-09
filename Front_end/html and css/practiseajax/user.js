var posts = [];

function mapPosts() {
    var cardsRef = document.getElementById('cards');
    cardsRef.innerHTML = "";

    for (var i = 0; i < posts.length; i++) {
        cardsRef.innerHTML +=
            '<div class="card text-white bg-info mb-3 row justify-content-center"   style="max-width:540px;">' +
            '<div class="card-body">' +
            '<p class="card-text">'+'<i class="far fa-id-card">:</i>'
             + posts[i].id+ '</p>' +
            '<h6 class="card-text">'+'<i class="fas fa-user">:</i>'
             + posts[i].name + '</h6>' +
            '<p class="card-text">' +'<i class="far fa-envelope">:</i>'
             + posts[i].email + '</p>' +
            '<p class="card-text">'+'<i class="fas fa-map-marker-alt">:</i>' 
            + posts[i].address.street + posts[i].address.suite + '  '
            + posts[i].address.city + '  ' + posts[i].address.zipcode + '  '
            + posts[i].address.geo.lat + '  ' + posts[i].address.geo.lng
            + '</p>' +
            '<p class="card-text">'+'<i class="fas fa-phone-volume">:</i>'
            + posts[i].phone + '</p>' +
            '<p class="card-text">WEBSITE:' + posts[i].website + '</p>' +
            '<p class="card-text">COMPANY:' + posts[i].company.name + '  ' +
            posts[i].company.catchPhrase + ' ' +
            posts[i].company.bs + '</p>' +
            '</div>' +
            '</div>';
    }

}

function getPosts() {

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (xhr.status >= 200 && xhr.status < 300) {
            posts = JSON.parse(xhr.response)
            mapPosts()
            document.getElementById('progress').style.display = 'none';
        } else {
            console.log('The request failed!');
        }
    };

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()
}