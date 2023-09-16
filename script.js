const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '94715e2efcmshdfaf3cc07bd110cp1ceb89jsn5dae41f923c4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData(city) {
    cityname.innerHTML=city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        cloud_pct = result.cloud_pct;
        console.log(cloud_pct);
        temp.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;

    } catch (error) {
        console.error(error);
    }
}

document.getElementById('submit');
 submit.addEventListener('click',(e) =>{
     e.preventDefault();
     fetchData(city.value);

 })

// Call the async function to start the fetching process
fetchData('Lahore');
