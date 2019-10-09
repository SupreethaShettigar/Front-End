var beverages = ['tea', 'coffee', 'milk'];
function createList() {
    var listItems = '';
    for (var i = 0; i < beverages.length; i++) {
        listItems +=
            '<li class="list-group-item d-flex justify-content-between align-item-center">' +
            '<span class="lead"> ' + beverages[i] + '</span>' +
            '<buton class="btn btn-default text-danger"  onclick="deleteBeverages( ' + i + ') ">' +
            '<i class="fa fa-times-circle fa-lg"></i>' +
            '</buton>' +
            '</li>'
    }
    document.getElementById('list').innerHTML = listItems;
}
function deleteBeverages(index) {
    beverages.splice(index, 1);
    createList();
}
function addBeverages() {
    beverages.push(document.getElementById('beverageText').value);
    createList();
    document.getElementById('beverageText').value = '';
}