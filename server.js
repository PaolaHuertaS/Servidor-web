console.clear();
const http = require('http');

const httpServer = http.createServer((req,res) => {
    console.log("Pagina de servidor web");

    res.end("Recibido");
});

httpServer.listen(3000);
