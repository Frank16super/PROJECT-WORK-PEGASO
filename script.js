window.onload = function() {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://frank16super.github.io/PROJECT-WORK-PEGASO/docs/documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf",
        width: 140,
        height: 140,
        colorDark : "#2c3e50",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};
