const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
    const url request.url === "/" ? "/index.html" : request.url;
    console.log(request.headers);
    console.log(url);
    const filePath = path.join("public", url);
    fs.readFile(filePath, (error, file) => {
        if(error) {
            console.error(error);
            response.writeHead(404, {"Content-Type": "text/html"});
            fs.readFile("public/404.html", (err, data) => {
                response.end(data, "uft-8");
            });
            return;
        }

        console.log(file);
        response.writeHead(200, { "Content-Type", "text/html"});
        response.end(file, "utf-8");
    });
});

server.listen(3001, () => {
    console.log("Server is Listening on the port 3001");
});