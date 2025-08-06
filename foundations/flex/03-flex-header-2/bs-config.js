module.exports = {
    server: "./",        // sirve la carpeta actual
    files: ["./**/*"],   // observa todos los archivos
    watchOptions: {
        usePolling: true,   // 🔥 fuerza el uso de "polling" (soluciona WSL2)
        interval: 500       // revisa cambios cada 0,5s
    },
    open: true,             // abre el navegador automáticamente
    notify: true
};
