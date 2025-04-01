const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");
const copyBtn = document.getElementById("copy-btn");

shortBtn.addEventListener("click", () => {
  const longUrl = document.getElementById("longUrl").value;
  const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
    longUrl
  )}`;
  const shortUrlTextarea = document.getElementById("shortUrl");

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortUrlTextarea.value = data;

      // Hacer clic en el área de texto abrirá la URL en una nueva ventana
      shortUrlTextarea.style.cursor = "pointer"; // Cambiar el cursor a puntero

      // Agregar el evento para abrir la URL en una nueva ventana
      shortUrlTextarea.addEventListener("click", () => {
        window.open(data, "_blank"); // Abrir la URL acortada en una nueva ventana
      });
    })
    .catch(
      (error) =>
        (shortUrlTextarea.value = "Error: Unable to shorten this URL" + error)
    );
});

reloadBtn.addEventListener("click", () => location.reload());

copyBtn.addEventListener("click", () => {
  const shortUrlTextarea = document.getElementById("shortUrl");

  // Seleccionar y copiar el texto del área de texto
  shortUrlTextarea.select();
  document.execCommand("copy");

  alert("URL copiada al portapapeles!");
});
