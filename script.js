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
    .then((data) => (shortUrlTextarea.value = data))
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
