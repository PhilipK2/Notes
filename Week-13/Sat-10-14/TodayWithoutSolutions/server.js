var http = require("http");

var port = 8080;

function handleReqest(request, response){
    response.end('It works!!' + request.url);
    //your server side stuff goes here in the read world
}

var server = http.createServer(handleReqest);

server.listen(port, function(){
    console.log('were listening' + port);
});