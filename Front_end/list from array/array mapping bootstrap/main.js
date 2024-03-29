var beverages = ['tea', 'coffee', 'milk'];

function deleteBeverage(index) {
    beverages.splice(index, 1);
    mapList();
}

function addBeverage() {
    var newBeverage = document.getElementById('newBeverage').value
    beverages.push(newBeverage);
    document.getElementById('newBeverage').value = ''
    mapList();
}

function resetBeverages() {
    beverages = ['tea', 'coffee', 'milk'];
    mapList();
}

function textChanged() {
    var newBeverage = document.getElementById('newBeverage').value
    if(newBeverage.length == 0){
        document.getElementById('addButton').disabled = true
    }
    else{
        document.getElementById('addButton').disabled = false        
    }
}

function mapList() {
    var list = ''
    for (var i = 0; i < beverages.length; i++) {
        list += "<li class='list-group-item d-flex justify-content-between align-items-center'>"
            + beverages[i]
            + "<button class='btn btn-link text-danger' onclick='deleteBeverage(" + i + ")'>"
            + "<i class='fas fa-trash'></i>"
            + "</button>"
            + "</li>"
    }
    document.getElementById('list').innerHTML = list;
}