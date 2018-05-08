$(document).ready(function() {
    $("#gonder").click(function(){
        $('.donenVeri').html('');
        var sehirBilgisi = $("#sehirGir").val();
        var apiCagir='http://api.openweathermap.org/data/2.5/weather?q='+sehirBilgisi+',tr&appid=98edf730e6fee3c4b68fe3912bde48db&units=metric';
    
    $.getJSON(apiCagir, gelenHava);
    
    function gelenHava(gelenBilgi){
    var sehirAdi=gelenBilgi.name;
    var aciklama=gelenBilgi.main.temp;
    $('.donenVeri').append(gelenBilgi.name + " şehrindeki hava durumu: " + aciklama + " derece.");
    }
}); 
});