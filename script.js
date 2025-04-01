const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

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
      shortUrlTextarea.style.cursor = "pointer"; // Cambia el cursor a un puntero
      shortUrlTextarea.addEventListener("click", () => {
        window.open(data, "_blank"); // Abre en una nueva pestaña
      });
    })
    .catch(
      (error) =>
        (shortUrlTextarea.value = "Error: Unable to shorten this URL" + error)
    );
});

reloadBtn.addEventListener("click", () => location.reload());
