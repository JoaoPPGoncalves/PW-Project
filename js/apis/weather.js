import env from '../../../env.json' assert { type: "json" };

const options = {
    method: 'GET'
}

async function getWeather(){
    var dataWeather;

    try{
        await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${env.WEATHERAPI}&q=Algarve&days=1&aqi=no&alerts=no`, options)
        .then(response => response.json())
        .then(data => {
            dataWeather = data;//passar a informação para um variavel
        })
        .catch(err => console.error(err));
    }catch(err){
        console.log("Erro ao obter os dados sobre a data.");
    }

    return dataWeather;
}

export {getWeather}