window.addEventListener('load', ()=>{
let long;
let lat;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=>{
console.log(position);
long = position.coords.longitude;
lat = position.coords.latitude;

const proxy = "https://cors-anywhere.herokuapp.com";
const api = `${proxy}https://api.darksky.net/forecast/008c945d1b6e1255fa9c410ab99bb210/${lat},${long}`;
fetch (api)
.then (response=>{
    return response.json();
})
.then (data =>{
    console.log(data);
});
    });

}
});