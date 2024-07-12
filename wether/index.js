const ApiKey = "026b3921fac4bf81fa1b0a1c1196c2f3"
let city = "Mumbai";
const url ="https://api.openweathermap.org/data/2.5/weather?"

document.querySelector('.button').addEventListener("click",()=>{

city = document.querySelector('.input').value;
async function apicall(){
  const response = await fetch(url + `q=${city}` + `&appid=${ApiKey}`)
  var data = await response.json();

  console.log(data);

  const temprature = document.querySelector(".temp").innerText = data.main.temp;
 document.querySelector(".city").innerText = data.name;
 document.querySelector(".humidity").innerText = data.main.humidity;
 document.querySelector(".wind").innerText = `${data.wind.speed}m/h`

 document.querySelector('.input').value = "";


}

apicall();


})


