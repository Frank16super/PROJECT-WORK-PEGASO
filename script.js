window.onload = function() {
    var urlToEncode = window.location.href; 
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: urlToEncode,
        width: 140, // Larghezza in pixel
        height: 140, // Altezza in pixel
        colorDark : "#2c3e50", // Colore dei quadratini
        colorLight : "#ffffff", // Colore dello sfondo
        correctLevel : QRCode.CorrectLevel.H
    });
};