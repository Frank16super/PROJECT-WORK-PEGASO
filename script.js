window.onload = function() {
    var urlToEncode = https://frank16super.github.io/PROJECT-WORK-PEGASO/docs/documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf; 
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: urlToEncode,
        width: 140,
        height: 140,
        colorDark : "#2c3e50",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};
