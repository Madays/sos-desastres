$(document).ready(init);
var currentSection= null;

function init()
{
    currentSection= $('#login');
    $('#btn_inicio').click(onClickInicio);
    $('#btn_accion').click(onClickAccion)
    $('#btn_reportar').click(onClickReportar);
    $('#btn_busca_ayuda').click(onClickBuscaAyuda);
    $('#btn_tipo_ayuda').click(onClickTipoAyuda);
    $('#btn_centros_ayuda').click(onClickCentroAyuda);
    $('#btn_lista_desastres').click(onClickListDesastre);
    /*$('#btn_info_desastres').click(onClickInfoDesastre);*/
}
function onClickInicio()
{
    goToSection('accion');
}
function onClickAccion()
{
    goToSection('reportar-desastre');
}
function onClickReportar()
{
    goToSection('buscar-ayuda');
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
