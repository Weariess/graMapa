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
    const dol=document.getElementById('woj')
    
    var wojewodztwo=wojewodztwa.features[licz].properties.nazwa
    
    dol.innerHTML=wojewodztwo
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
            document.getElementById('punkty').innerHTML=points
            start()

        }
else{ 
    document.getElementById('odp').innerHTML='źle'
    console.log("źle")


start()
}   

document.getElementById("gora").innerHTML=""
})      
}