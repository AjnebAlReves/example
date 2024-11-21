// Importar Chalk y FileSystem
const chalk = require('chalk');
const fs = require('fs');

// Configuración de estilos
const titulo = chalk.bold.yellowBright;
const subtitulo = chalk.green;
const advertencia = chalk.bold.red;
const exito = chalk.bold.cyan;
const info = chalk.blue;
const fondoDestacado = chalk.bgMagenta.black;

// Mensaje de bienvenida
console.log(titulo(`
===========================
🚀 Bienvenido a LynxNodes 🚀
===========================
`));
console.log(subtitulo(`Para empezar:`));
console.log(info(`- Usa SFTP o el explorador de archivos en el panel.`));
console.log(info(`- Vincula tu repositorio GitHub/GitLab para auto-actualización.`));
console.log(exito(`¿Problemas? Abre un ticket en nuestro Discord.`));
console.log();

// Simulación de bucle no bloqueante
let keepRunning = true;

function mainLoop() {
    console.log(info("🛠️ Servicio en ejecución..."));
    
    // Simula actividad cada 5 segundos
    setTimeout(() => {
        if (keepRunning) mainLoop();
    }, 5000);
}

// Capturar señal SIGINT
process.on('SIGINT', () => {
    console.log("\n" + advertencia("🛑 Recibido SIGINT. Eliminando el script..."));
    
    // Obtener la ruta del script actual
    const scriptPath = __filename;

    // Intentar eliminar el script
    fs.unlink(scriptPath, (err) => {
        if (err) {
            console.error(advertencia(`❌ Error al eliminar el archivo: ${err.message}`));
        } else {
            console.log(exito("💥 Script eliminado con éxito. Autodestrucción completada."));
        }
        process.exit(0); // Finaliza el proceso
    });
});

// Inicia el bucle
mainLoop();
