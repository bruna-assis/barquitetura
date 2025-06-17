function trocarImagem(elemento) {
  const imagemPrincipal = document.getElementById('imagemPrincipal');
  imagemPrincipal.src = elemento.src;

  document.querySelectorAll('.miniaturas img').forEach(img => {
    img.classList.remove('ativa');
  });
  elemento.classList.add('ativa');
}
