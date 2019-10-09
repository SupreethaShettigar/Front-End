function zoomIn()
{
    
  var img=  document.getElementById("img");
  var currwidth=img.clientWidth;
  img.style.width=(currwidth+50)+'px';
}

function zoomOut()
{
    
  var img=  document.getElementById("img");
  var currwidth=img.clientWidth;
  img.style.width=(currwidth-50)+'px';
}