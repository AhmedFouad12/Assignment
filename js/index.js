let weatherSearchInput = document.getElementById('weatherSearchInput');
let weatherSearchbutton = document.getElementById('weatherSearchBtn')
let allItem = [];
console.log(allItem);
async function getWeather(index){
    let apiWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=967562adab99419ba0414649220512 &q=${index}&days=3&aqi=no&alerts=no`);
    let finalRsult = await apiWeather.json()
    allItem.push(finalRsult);
}


async function dispalyWeather()
{
    let lastElement = allItem[allItem.length - 1];
        let cartoona = 
    `<div class="col-md-4 sec-color p-0 ">
    <div class="d-flex main-color p-2 px-4">
    <div class=" mx-auto">${lastElement.location.localtime}</div>
    </div>
    <div class="p-4"><span class="fs-5">${lastElement.location.name}</span>
    <div class=" d-flex">
    <div class=" col-md-7"><span class="font-big">${lastElement.current.temp_c}<sup>o</sup>C</span></div>
    <div class=" col-md-5 text-end m-auto"><img src="https://${lastElement.current.condition.icon}" alt=""></div>
    </div>
    <span class=" text-info d-block mt-5 mb-2">${lastElement.current.condition.text}</span>
    <span class=" me-4"><img class=" me-1" src="./images/icon-umberella.png" alt="">${lastElement.current.humidity}%</span>
    <span class=" me-4"><img class=" me-1" src="./images/icon-wind.png" alt="">${lastElement.current.wind_kph}km/h</span>
    <span><img class=" me-1" src="./images/icon-compass.png" alt="">${lastElement.location.tz_id}</span>
    </div>
    </div>
    
    <div class=" col-md-4 thired-color p-0">
    <div class=" text-center main-color p-2">${lastElement.forecast.forecastday[1].date}</div>
    
    <div class=" text-center pt-5">
    <img class=" p-4" src="https://${lastElement.forecast.forecastday[1].day.condition.icon}" alt="">
    <span class=" p-3 text-white fw-bold fs-4 d-block">${lastElement.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</span>
    <span>${lastElement.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</span>
    <span class=" text-info d-block mb-4">${lastElement.forecast.forecastday[1].day.condition.text}</span>
    </div>
    </div>
    
    <div class=" col-md-4 sec-color p-0">
    <div class=" text-center main-color p-2">${lastElement.forecast.forecastday[2].date}</div>
    
    <div class=" text-center pt-5">
    <img class=" p-4" src="https://${lastElement.forecast.forecastday[2].day.condition.icon}" alt="">
    <span class=" p-3 text-white fw-bold fs-4 d-block">${lastElement.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</span>
    <span>${lastElement.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</span>
    <span class=" text-info d-block mb-2">${lastElement.forecast.forecastday[2].day.condition.text}</span>
    </div>
    </div>`;
    
    
    document.getElementById('weatherTable').innerHTML = cartoona
}


async function getAll()
{
    await getWeather('alex');
    await getWeather('cairo');
    await dispalyWeather();
}
getAll()

weatherSearchInput.addEventListener('input' , ()=> getWeather(weatherSearchInput.value));
weatherSearchInput.addEventListener('input' , ()=> dispalyWeather());
weatherSearchInput.addEventListener('keypress', ()=> getWeather(weatherSearchInput.value));
weatherSearchInput.addEventListener('keypress', ()=> dispalyWeather());
weatherSearchbutton.addEventListener('click' ,()=>getWeather(weatherSearchInput.value));
weatherSearchbutton.addEventListener('click' ,()=> dispalyWeather())
