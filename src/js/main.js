$(document).ready(init);
var currentSection= null;

function init()
{
    currentSection= $('#login');
    $('#btn_inicio').click(onClickAccion);
    $('#btn_reportar').click(onClickReportar);
    //$('#btn_tipo_ayuda').click(onClickTipoAyuda);
    $('#btn_centros_ayuda').click(onClickCentroAyuda); $('#btn_lista_desastres').click(onClickListDesastre);
    /*$('#btn_info_desastres').click(onClickInfoDesastre);*/
}

function onClickAccion()
{
    goToSection('accion');
      
}

function onClickReportar(){
    
    
    goToSection('reportar-desastre');
    
    var toTipoAyuda = $('#m-buscar');
    toTipoAyuda.hide();
    $('#pac-input').hide();
    //initMap(); 
    initAutocomplete();
    onClickTipoAyuda();
    
}

function onClickTipoAyuda()
{
    var btnBuscarAyuda = $("#btn_tipo_ayuda");       btnBuscarAyuda.click(showDivBuscarAyuda);
    
    function showDivBuscarAyuda(event){
        event.preventDefault();
        
        var toBuscarAyuda = $('#d-info');
        toBuscarAyuda.hide();    
        var toTipoAyuda = $('#m-buscar');
        toTipoAyuda.show();
        $('#pac-input').show();        
    }
    
    //$('#hospital').click(search('Hospitales'));
    //$('#bombero').click(search('Bomberos'));
    //$('#comisaria').click(search('Comisarias'));
  //goToSection('centros-ayuda');
}

/*
function search(place){
     $('#pac-input').val('');
     $('#pac-input').val(place).focus().trigger({type:'keypress',which:13});
    
}
*/

function onClickCentroAyuda()
{
    goToSection('lista-desastres');
}
function onClickListDesastre()
{
    goToSection('info-desastres');
}

function goToSection(_id)
{
    currentSection.removeClass('visible');
    var nextSection = $('#'+_id);
    nextSection.addClass('visible'); 
    currentSection=nextSection;
    
}
 
function initAutocomplete() {
    
    
    $("#hospital").click(function (){
    if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position){ 
                    infoWindow = new google.maps.InfoWindow({map: map});
                    var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
                    map.panTo(pos);
                });
        }else{
            console.log("Browser doesn't support geolocation!");
    }
});
    
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -16.459908, lng: -71.515903},
            zoom: 13,
            mapTypeId: 'roadmap',
            disableDefaultUI: true
        }) ;

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
 
}

