process.on('SIGINT', () => {
  console.log('Apagando...');
  process.exit();
});

console.log('¡Hola! Presiona Ctrl+C para apagarme.');

while (true) {
    // Bucle infinito
}
//