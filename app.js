window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone= document.querySelector('.location-timezone');
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{

            long=position.coords.longitude;
            lat=position.coords.latitude;
            const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=d4638c0fcce4855198e29e6975c70eaf`
            fetch(api)
            .then(response => {
                return response.json();
            }
               )
               .then(data=> {
                   console.log(data);
                   const{temp}= data.current;
                   const{weather}= data.current;
                   //Set Dom Elements from the API
                   temperatureDegree.textContent=temp;
                   temperatureDescription.textContent=weather[0].description;
                   locationTimezone.textContent= data.timezone;
                 
                }
                   );
                        });
       
                 
    }
   
});