var map = L.map('map').setView([52.44251260319042, 18.921683024307846], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function liczba(){
    return Math.floor(Math.random() * wojewodztwa.features.length-1)
}

console.log(wojewodztwa.features)

var points=0




function start(){
     licz=liczba()
    var woj=document.getElementById('woj')
    
    var wojewodztwo=wojewodztwa.features[licz].properties.nazwa
    
    woj.innerHTML=wojewodztwo
    //console.log(wojewodztwo)
}

var warstwa=[]
for(let i=0;i<=wojewodztwa.features.length-1;i++){
    
    var wojewodztwo=wojewodztwa.features[i]
    var mapwoj= L.geoJSON(wojewodztwo).addTo(map)
    
    mapwoj.on('click',function(e){
        
const wybrane=e.layer.feature.properties.nazwa
console.log(wybrane)

        if(wybrane==wojewodztwa.features[licz].properties.nazwa){
            document.getElementById('odp').innerHTML='dobrze'
            console.log("dobrze")
            points=points+1
            document.getElementById('punkty').innerHTML="punkty: "+points
            //marker(e.latlng)
            start()

        }
else{ 
    document.getElementById('odp').innerHTML='źle'
    console.log("źle")
    marker(e.latlng)
    //var marker2 = L.marker([51.5, -0.09]).addTo(map);


start()
}   
function marker(latlng){
    L.marker(latlng).addTo(map)
}

document.getElementById("gora").innerHTML=""
})      
}