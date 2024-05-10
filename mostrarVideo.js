function mostrarVideo() {
  var video = document.getElementById("video");
  var button = document.querySelector("button");

  // Muestra el video
  video.style.display = "block";

  // Detiene la reproducción actual (si lo hay)
  video.pause();
  video.currentTime = 0;

  // Reproduce el video
  video.play();
}