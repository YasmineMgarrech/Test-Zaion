import { createServer, IncomingMessage, ServerResponse, Server } from 'http';
import * as dotenv from 'dotenv'
import Batiments from "./Batiments"

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST: string = process.env.HOST as string;

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
    if (req.method === "POST" && req.url == "/") {
        let body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });
        req.on("end", function () {
            try {
                const batimentsList: Array<number> = JSON.parse(body).buildingsHeightList as number[];
                if (batimentsList) {
                    const batiments: Batiments = new Batiments(batimentsList)
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ surface_maximale_d_eau_stockee: batiments.solutionOptimale() }));
                } else {
                    res.statusCode = 400;
                    res.end("Bad input");
                }
            }catch (err : any) {
                res.statusCode = 500;
                res.end(err.message);
            }
        });
    } else {
        res.statusCode = 404;
        res.end("Bad request");
    }
}

const server: Server = createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
})