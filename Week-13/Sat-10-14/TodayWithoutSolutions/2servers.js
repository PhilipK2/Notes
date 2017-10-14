var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleReq2);

server1.listen(PORT, function(){
    console.log("server1 listening" + PORT);
});
server2.listen(PORT2, function(){
    console.log("server2 listening" + PORT2)
});


function handleRequest(request, response){
    response.end("youre so pretty" + request.url);
}

function handleReq2(request, response) {
    response.end("hot damn youre ugly" + request.url);
}




