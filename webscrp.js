window.onload=init;

async function init(){
	const api_url='https://api.openweathermap.org/data/2.5/weather?q=Fresno,us&APPID=87e3c3bb474cc0be0e7747a2d9d2f1fb&units=imperial';
        const response = await fetch(api_url);
        const data = await response.json();
	document.getElementById("dd").innerHTML = "Fresno temp is " + data.main.temp + "°F click for today's max temp";
}
	

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

async function getData(){
    const api_url='https://api.openweathermap.org/data/2.5/weather?q=Fresno,us&APPID=87e3c3bb474cc0be0e7747a2d9d2f1fb&units=imperial';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("maxT").innerHTML = data.main.temp_max + "°F";
}
