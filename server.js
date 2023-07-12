console.clear();
import {createServer} from 'http';

const httpServer = createServer((req,res) => {
    console.log("Pagina de servidor web");
    res.end("Recibido");
});

httpServer.listen(3000);

