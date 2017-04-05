

const api="https://api.openweathermap.org/data/2.5/weather?q="
const key="&APPID=33585a41bbfeb05b336a9869e40097b0"
let btn=document.getElementById("getweather")


btn.addEventListener('click', function (e) {

e.preventDefault(); 
let city=document.getElementById("city").value  
let country=document.getElementById("country").value

let url=api+city+","+country+"&units-metric"+key;


fetch(`${url}`)
  .then((res) => res.json())
  .then((data) => {


let result= "<h2> Weather for"+ data.name +","+data.sys.country+"</h2>"+
        "<h2>Weather:"+ data.weather[0].main + "</h2>" +
        "<h2>Detail:"+ data.weather[0].description + "</h2>"+
        "<h2>Temperature:"+ data.main.temp + "&deg;C</h2>"+
        "<h2>Pressure:"+ data.main.pressure+ "</h2>"+
        "<h2>Humidity:"+ data.main.humidity+ "</h2>"

         document.getElementById('desc').innerHTML= result;

 
  if(condition.includes("clouds","partly cloudy","cloudy","mostly cloudy","over-cast"))
      {    
        document.getElementById("icons").innerHTML = '<img src="images/cloud.png">'
      }
       
     if(condition.includes("snow","snowy","snowfall"))
      {    
        document.getElementById("icons").innerHTML = '<img src="images/rain.png">'
      }
     if(condition.includes("sun","sunny","sunshine"))
      {    
        document.getElementById("icons").innerHTML = '<img src="images/sun.png">' 
      }
    if(condition.includes("rain","rainy","light drizzle","drizzle"))
      {    
        document.getElementById("icons").innerHTML = '<img src="images/rain.png">'
      }


 })

.catch((e)=>console.log(`Incorrect`))

})

