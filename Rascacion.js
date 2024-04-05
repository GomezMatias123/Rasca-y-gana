function scratchTicket() {
  const scratchArea = document.getElementById('scratch-area');
  const overlay = document.querySelector('.overlay');
  
  // Si la capa de raspar ya ha sido eliminada, salimos de la función
  if (!scratchArea || !overlay) {
    return;
  }

  // Eliminamos la capa de raspar
  scratchArea.removeChild(overlay);

  // Mostramos un mensaje de premio
  const ticket = document.getElementById('ticket');

  // Desactivamos el botón de raspar
  const scratchButton = document.querySelector('button');
  scratchButton.disabled = true;
}
