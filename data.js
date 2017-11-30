var data

fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Paris&mode=json&units=metric&cnt=7&APPID=6ed272d88d0b8c7ef4bf60dabff1a7df').then(

    function(response) {
	response.json().then(function(data1){data = data1})
    }
)

'http://api.openweathermap.org/data/2.5/weather?lat=43.6&lon=3.8&mode=json&units=metric&cnt=16&APPID=1f941724efd625f2053e2f0b3848b237'
