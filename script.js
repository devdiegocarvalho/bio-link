function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto de Mike Brito sorrindo, usando óculos preto e jaqueta preta, barba, com fundo da imagem em degradê roxo para azul."
    );
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Mike Brito sorrindo, usando óculos  e camisa preta, barba, com fundo da imagem amarela."
    );
  }
}
