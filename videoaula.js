// Lista de vídeos
var videos = [
    "https://www.youtube.com/embed/DZZbjdvXBPE?si=SKO5_PJOzkweBWaE",
    "https://www.youtube.com/embed/Q-CwtK3yHIg?si=SgqAyTkcJt_vcy3n",
    "https://www.youtube.com/embed/4ggxiI48QOk?si=LDjKk63ov_vNPLvx"
];

var index = 0; // índice do vídeo atual

// Espera o iframe carregar no DOM
window.onload = function() {
    window.player = document.getElementById("videoPlayer");
}

// Próximo vídeo
function nextVideo() {
    index++;
    if(index >= videos.length) index = 0; // volta para o primeiro
    player.src = videos[index];
}

// Vídeo anterior
function prevVideo() {
    index--;
    if(index < 0) index = videos.length - 1; // volta para o último
    player.src = videos[index];
}
