// const myWeather = fetch("http://api.openweathermap.org/geo/1.0/direct?q=India&limit=5&appid={d114212db71072c03b03ce2a60c2f59f}")
// myWeather.then((response)=>{
//     console.log("I am response")
//     console.log(response)
// }).catch((error)=>{
//    console.log(error)



// })

// console.log(myWeather)

// USER APIs
// const sample = fetch("https://reqres.in/api/users/2", {
//     method: 'POST',
//     headers: {
//       'content-type':'application/json'
//     },
//     body: JSON.stringify({
//         name: 'SAnhita'
//     })
// })
// sample.then(res => {
    
//      return res.json()
// })
// .then(data => console.log(data))


// WEATHER API DOM 
var submit = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('name')
var desc = document.querySelector('desc')
var temp = document.querySelector('temp')
var content = document.querySelector('content')

const weather = fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=d114212db71072c03b03ce2a60c2f59f')
weather.then((res)=>{
    return res.json()
    
}).then((data)=>{
    console.log(data)
    console.log(data.temp)
})

function showWeather(name){
 console.log(name)
 name = inputValue.value
 content.append(name)
console.log(inputValue.value)

}