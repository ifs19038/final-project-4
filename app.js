let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e90f275d13c352884256251aa2132b1a')
.then(response => response.json())
.then(data => 
  // console.log(data))
  {
  let tempValue = data['main']['temp'];
  let nameValue = data['name'];
  let negaraValue = data['sys']['country']
  let descValue = data['weather'][0]['description'];
  let windValue = data['wind']['speed'];
  let tempCelciusValue = tempValue - 273.15;

  main.innerHTML = nameValue + ", " + negaraValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempCelciusValue.toFixed(0) + "&deg" +"C";
  wind.innerHTML = windValue + " km";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
