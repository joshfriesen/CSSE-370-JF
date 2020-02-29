
function funfun() {
    
  document.getElementById("mouse").style.color = 'red';
}

function notnot() {
  document.getElementById("mouse").style.color = 'black';
}

function getTime() {
  document.getElementById("time").innerHTML = Date();
    document.getElementById("time").style.display='block';
}

function invisible(id){
    var temp = document.getElementById(id);
    if(temp.style.display=='block')
        temp.style.display='none';
    else 
        temp.style.display='block';
    temp.style.color='red';
}
