const divDolar = document.getElementById('divDolar')

/*fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, ccb, mep, ccl}) => {

        divDolar.innerHTML = `
            <p>Oficial: $${oficial} </p>
            <p>Solidario: $${solidario} </p>
            <p>Blue: $${blue} </p>
            <p>Mep: $${mep} </p>
            <p>CCL: $${ccl} </p>
            <p>CCB: $${ccb} </p>
        `
    })

setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, ccb, mep, ccl}) => {
        divDolar.innerHTML = `
            <p>Oficial: $${oficial} </p>
            <p>Solidario: $${solidario} </p>
            <p>Blue: $${blue} </p>
            <p>Mep: $${mep} </p>
            <p>CCL: $${ccl} </p>
            <p>CCB: $${ccb} </p>
        `
    })
}, 30000)*/

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

const divClima = document.getElementById('divClima')


fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Cordoba","arg"&appid=${API_KEY}`)
.then(response => response.json())
.then(datos => {
    let {lat, lon, name:nombre, country:pais, state:provincia} = datos[0]

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp `)
    .then(response => response.json())
    .then(({main,weather}) => {
        divClima.innerHTML = `
        <p>Ciudad: ${nombre} </p>
        <p>Provincia: ${provincia} </p>
        <p>Pais: ${pais} </p>
        <p>Temperatura: ${main.temp} °C</p>
        <p>Sensacion Termica: ${main.feels_like} °C</p>
        <p>Presion: ${main.pressure} hPa</p>
        <p>Humedad: ${main.humidity}%</p>
        <p>Tiempo: ${weather[0].description} </p>
        `
    })
})