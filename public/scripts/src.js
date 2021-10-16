url = "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/CY_WildlandFire_Perimeters_ToDate/FeatureServer/0/query?where=1%3D1&outFields=irwin_FireDiscoveryDateTime,irwin_FireOutDateTime,irwin_InitialLatitude,irwin_InitialLongitude&outSR=4326&f=json"

var active_fires = [];
var shelter_list = [];

const JSONssu = {lat:38.3409, lng:-122.6731, name:"sonoma state", address:"420 blaze street", phone:"1234567890"}
const JSONsf = {lat: 37.7749, lng: -122.4194, name:"san franciso",address:"420 blaze street", phone:"1234567890"}
const JSONscbbw = {lat: 36.9643, lng: -122.0187, name:"santa cruz beach boardwalk",address:"420 blaze street", phone:"1234567890"};
const JSONjbf = { lat: 38.239181, lng: 	-122.079396, name:"jelly belly factory",address:"420 blaze street", phone:"1234567890" };
const JSONsjsu = {lat: 37.3352, lng: -121.8811, name: "san jose state", address:"420 blaze street", phone:"1234567890"}

function buildShelter(json){
    return {
        coords:{lat:json.lat, lng:json.lng},
        name: json.name,
        address: json.address,
        phone: json.phone
    }
}

shelter_list.push(buildShelter(JSONssu));
shelter_list.push(buildShelter(JSONsf));
shelter_list.push(buildShelter(JSONscbbw));
shelter_list.push(buildShelter(JSONjbf));
shelter_list.push(buildShelter(JSONsjsu));
console.log(shelter_list);

function addFire(map,coords){
    const m = new google.maps.Marker({
        position:coords,
        map:map,
        icon: "/static/images/fire2.svg"
    });
}

function addMarker(map,shelter){
    const image = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
    };

    const m = new google.maps.Marker({
        position:shelter.coords,
        map:map,
        icon:image
    });

    const infowindow = new google.maps.InfoWindow({
        content: `<h3>${shelter.name}</h3> <p>${shelter.address}</p> <p>${shelter.phone}</p>`,
    });
    
    m.addListener("click", function(){
        infowindow.open({
            anchor:m,
            map:map,
            shouldFocus: false
        });
    });
}


function addAllMakers(map,arr){
    i = 0;
    while(i < arr.length){
        addMarker(map,arr[i]);
        i++;
    }
}

function addAllFire(map,arr){
    i = 0;
    while(i < arr.length){
        addFire(map,arr[i]);
        i++;
    }
}

async function initMap() {
    let active_fires = []

    // The map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 38.3409, lng: -122.6731 },
    });

    await $.ajax(url,
        {
            success: function (data) {// success callback function
                data.features.forEach((fire)=>{
                    if (!fire.attributes.irwin_FireOutDateTime){
                        if (fire.attributes.irwin_InitialLatitude){
                            if (fire.attributes.irwin_InitialLongitude){
                                active_fires.push({lat: fire.attributes.irwin_InitialLatitude, lng:fire.attributes.irwin_InitialLongitude})
                            }
                        }
                    }
                })
        }
    });

    //adds all shelter markers onto the map
    addAllMakers(map,shelter_list);
    //adds all fire markerse onto the map
    addAllFire(map,active_fires);
}
