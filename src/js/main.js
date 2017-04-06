$(document).ready(init);
var currentSection= null;

function init()
{
    currentSection= $('#login');
    $('#btn_inicio').click(onClickAccion);
    $('#btn_reportar').click(onClickReportar)
    $('#btn_buscar_ayuda').click(onClickBuscarAyuda);
    $('#btn_tipo_ayuda').click(onClickTipoAyuda);
    $('#btn_centros_ayuda').click(onClickCentroAyuda);
    $('#btn_lista_desastres').click(onClickListDesastre);
    /*$('#btn_info_desastres').click(onClickInfoDesastre);*/
}
function onClickAccion()
{
    goToSection('accion');
}
function onClickReportar()
{
    goToSection('reportar-desastre');
    //var toTipoAyuda = $('#m-buscar');
    //toTipoAyuda().hide();
    
    initMap();
    
    var btnBuscarAyuda = $("#btn_reportar");
    
    btnBuscarAyuda.click(showBuscarAyuda);    
}

function showBuscarAyuda(){
    
    var toBuscarAyuda = $('#d-info');
    //var toTipoAyuda = $('#m-buscar');
    
    toBuscarAyuda.hide();
    //toTipoAyuda.show();
    
    
}

function onClickBuscaAyuda()
{
    goToSection('tipo-ayuda');
}
function onClickTipoAyuda()
{
    goToSection('centros-ayuda');
}
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

var map;
function initMap() {
    getLocation();                          
}

function getLocation() {
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
   } else {
       alert("Geolocation is not supported by this browser.");
   }
}

function showPosition(position) {
   var myLatLng = {lat:position.coords.latitude,lon:position.coords.longitude};
   map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: myLatLng.lat, lng: myLatLng.lon},
   zoom: 16,
    disableDefaultUI: true
 });
   
   // Create a marker and set its position.
   var marker = new google.maps.Marker({
       map: map,
       position: {lat: myLatLng.lat, lng: myLatLng.lon},
       title: 'Hello World!'
   });
       
    
}