function setRed()
{
    var para=document.getElementById('para');
    var cardBody=document.getElementById('card-body');
    para.classList.replace(para.classList.item(3),'text-danger');
    cardBody.classList.replace(cardBody.classList.item(1),'alert-danger');

}

function setGreen()
{
    var para=document.getElementById('para');
    var cardBody=document.getElementById('card-body');
    para.classList.replace(para.classList.item(3),'text-success');
    cardBody.classList.replace(cardBody.classList.item(1),'alert-success');

}

function setBlue()
{
    var para=document.getElementById('para');
    var cardBody=document.getElementById('card-body');
    para.classList.replace(para.classList.item(3),'text-primary');
    cardBody.classList.replace(cardBody.classList.item(1),'alert-primary');

}

function setBlack()
{
    var para=document.getElementById('para');
    var cardBody=document.getElementById('card-body');
    para.classList.replace(para.classList.item(3),'text-dark');
    cardBody.classList.replace(cardBody.classList.item(1),'alert-dark');

}